// Pure API handlers: injected identity/storage keep authorization testable.
export class ApiError extends Error { constructor(status,message){super(message);this.status=status;} }
const JSON_HEADERS = {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Vary':'Cookie'};
export const json = (body,status=200) => new Response(JSON.stringify(body),{status,headers:JSON_HEADERS});
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const isOwn = (obj,key) => Object.prototype.hasOwnProperty.call(obj,key);
export const isNewer = (a,b) => !b || a.updatedAt>b.updatedAt || (a.updatedAt===b.updatedAt && a.opId>b.opId);

export function requireUser(user){if(!user?.userId) throw new ApiError(401,'Sign in with ChatGPT to use this feature.');return user.userId;}
export function requireOwner(user,ownerId){const id=requireUser(user);if(!ownerId || id!==ownerId)throw new ApiError(403,'Only the site owner can view correction reports.');return id;}
export function requireSameOrigin(request){
  const origin=request.headers.get('Origin');
  if(!origin || origin!==new URL(request.url).origin)throw new ApiError(403,'This action must originate from this website.');
  if(!/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type')||''))throw new ApiError(415,'Send JSON data.');
}
export async function readJson(request,maxBytes=1024*1024){
  const reader=request.body?.getReader();if(!reader)throw new ApiError(400,'A JSON request body is required.');
  const chunks=[];let count=0;
  try {for(;;){const {done,value}=await reader.read();if(done)break;count+=value.byteLength;if(count>maxBytes){await reader.cancel();throw new ApiError(413,'The request is too large.');}chunks.push(value);}}
  finally {reader.releaseLock();}
  const bytes=new Uint8Array(count);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
  try {return JSON.parse(new TextDecoder().decode(bytes));}catch{throw new ApiError(400,'The request is not valid JSON.');}
}
export function validateRecords(body,now=Date.now()){
  if(!isObject(body)||!isObject(body.records))throw new ApiError(400,'Provide a records object.');
  const entries=Object.entries(body.records);
  if(entries.length>250)throw new ApiError(413,'Sync at most 250 records per request.');
  const output=[];
  for(const [key,record] of entries){
    if(!/^(?:session|preferences|(?:bookmark|flag|learning|mix):[A-Za-z0-9_-]{1,100})$/.test(key))throw new ApiError(400,'Unsupported study record key.');
    if(!isObject(record)||!isOwn(record,'value')||!Number.isSafeInteger(record.updatedAt)||record.updatedAt<0||record.updatedAt>now+300000||typeof record.opId!=='string'||record.opId.length<1||record.opId.length>160||!/^[-.:A-Za-z0-9_]+$/.test(record.opId))throw new ApiError(400,'A study record has invalid version data.');
    const encoded=JSON.stringify(record.value);
    if(new TextEncoder().encode(encoded).length>128*1024)throw new ApiError(413,'A study record is too large.');
    if((key.startsWith('bookmark:')||key.startsWith('flag:')) && ![true,false,null].includes(record.value))throw new ApiError(400,'Bookmark and flag records must be true, false, or null.');
    if(!key.startsWith('bookmark:')&&!key.startsWith('flag:')&&record.value!==null&&!isObject(record.value))throw new ApiError(400,'Study data must be an object or null.');
    output.push({key,valueJson:encoded,updatedAt:record.updatedAt,opId:record.opId});
  }
  return output;
}
export function validateReport(body){
  if(!isObject(body)||typeof body.cardId!=='string'||!/^\b[A-Z][A-Z0-9]{0,15}-\d{2,4}$/.test(body.cardId)||typeof body.concern!=='string')throw new ApiError(400,'Provide a valid card ID and correction description.');
  const concern=body.concern.trim();if(concern.length<10||concern.length>4000)throw new ApiError(400,'Describe the concern in 10 to 4,000 characters.');
  return {cardId:body.cardId,concern};
}
async function readRecords(db,userId){
  const result=await db.prepare('SELECT record_key, value_json, updated_at, op_id FROM study_records WHERE user_id = ?').bind(userId).all();
  const records=Object.create(null);
  for(const row of result.results||[])records[row.record_key]={value:JSON.parse(row.value_json),updatedAt:row.updated_at,opId:row.op_id};
  return records;
}
export async function handleIdentity(request,{user,ownerId,db}){
  return json({authenticated:!!user,user:user?{id:user.userId,displayName:user.displayName}:null,isOwner:!!user&&!!ownerId&&user.userId===ownerId,storageAvailable:!!db});
}
export async function handleSync(request,{user,db,now=Date.now()}){
  const userId=requireUser(user);
  if(request.headers.get('X-Study-User')!==userId)throw new ApiError(409,'Your signed-in account changed. Refresh your account status before syncing.');
  if(!db)throw new ApiError(503,'Cloud storage is temporarily unavailable. Your local progress is safe.');
  if(request.method==='POST'){
    requireSameOrigin(request);const records=validateRecords(await readJson(request),now);
    // The conflict predicate is evaluated in SQLite, so concurrent device uploads
    // cannot replace a newer record after reading an old snapshot.
    for(let i=0;i<records.length;i+=50){
      await db.batch(records.slice(i,i+50).map(record=>db.prepare('INSERT INTO study_records (user_id, record_key, value_json, updated_at, op_id) VALUES (?, ?, ?, ?, ?) ON CONFLICT(user_id, record_key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at, op_id = excluded.op_id WHERE excluded.updated_at > study_records.updated_at OR (excluded.updated_at = study_records.updated_at AND excluded.op_id > study_records.op_id)').bind(userId,record.key,record.valueJson,record.updatedAt,record.opId)));
    }
  } else if(request.method!=='GET')throw new ApiError(405,'Method not allowed.');
  return json({userId,records:await readRecords(db,userId)});
}
export async function handleReports(request,{user,ownerId,db,now=Date.now(),uuid=()=>crypto.randomUUID()}){
  const userId=request.method==='GET'||request.method==='PATCH'?requireOwner(user,ownerId):requireUser(user);
  if(!db)throw new ApiError(503,'The report inbox is temporarily unavailable. You can still copy a review report.');
  if(request.method==='GET'){
    const page=new URL(request.url).searchParams.get('before');
    const before=page===null?Number.MAX_SAFE_INTEGER:Number(page);
    if(!Number.isSafeInteger(before)||before<0)throw new ApiError(400,'Invalid report page.');
    const result=await db.prepare('SELECT id, card_id, concern, created_at, status FROM correction_reports WHERE created_at < ? ORDER BY created_at DESC LIMIT 100').bind(before).all();
    const reports=(result.results||[]).map(row=>({id:row.id,cardId:row.card_id,concern:row.concern,createdAt:row.created_at,status:row.status}));
    return json({reports,nextBefore:reports.length===100?reports[reports.length-1].createdAt:null});
  }
  requireSameOrigin(request);
  const body=await readJson(request,16*1024);
  if(request.method==='POST'){
    const report=validateReport(body);
    const usage=await db.prepare('SELECT count(*) AS count FROM correction_reports WHERE user_id = ? AND created_at > ?').bind(userId,now-86400000).first();
    if(Number(usage?.count||0)>=20)throw new ApiError(429,'You have submitted 20 reports in the last 24 hours. Please try again later.');
    const id=uuid();
    await db.prepare('INSERT INTO correction_reports (id, user_id, card_id, concern, created_at, status) VALUES (?, ?, ?, ?, ?, ?)').bind(id,userId,report.cardId,report.concern,now,'open').run();
    return json({id,status:'open'},201);
  }
  if(request.method==='PATCH'){
    if(!isObject(body)||typeof body.id!=='string'||!/^[A-Za-z0-9-]{1,80}$/.test(body.id)||!['open','resolved'].includes(body.status))throw new ApiError(400,'Choose a valid report and status.');
    const result=await db.prepare('UPDATE correction_reports SET status = ? WHERE id = ?').bind(body.status,body.id).run();
    if(!result.meta?.changes)throw new ApiError(404,'Report not found.');
    return json({id:body.id,status:body.status});
  }
  throw new ApiError(405,'Method not allowed.');
}
export async function safeHandle(handler,request,context){
  try{return await handler(request,context);}catch(error){
    if(error instanceof ApiError)return json({error:error.message},error.status);
    return json({error:'The service is temporarily unavailable. Please try again.'},503);
  }
}
