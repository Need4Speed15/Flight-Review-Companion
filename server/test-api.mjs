import assert from 'node:assert/strict';
import { handleIdentity,handleSync,handleReports,safeHandle,validateRecords,requireSameOrigin,isNewer } from './core.mjs';

const base='https://study.example';
const now=1800000000000;
const userA={userId:'site-user-A',displayName:'Pilot A'};
const userB={userId:'site-user-B',displayName:'Pilot B'};
const request=(path,method='GET',body,userId=userA.userId)=>new Request(base+path,{method,headers:body?{'Origin':base,'Content-Type':'application/json','X-Study-User':userId}:{'X-Study-User':userId},body:body?JSON.stringify(body):undefined});
class FakeD1 {
  constructor(){this.records=new Map();this.reports=new Map();this.calls=[];}
  prepare(sql){const db=this;return {bind(...args){db.calls.push({sql,args});return {
    async all(){if(sql.includes('FROM study_records'))return {results:[...db.records.values()].filter(r=>r.user_id===args[0])};
      return {results:[...db.reports.values()].filter(r=>r.created_at<args[0]).sort((a,b)=>b.created_at-a.created_at).slice(0,100)};},
    async first(){return {count:[...db.reports.values()].filter(r=>r.user_id===args[0]&&r.created_at>args[1]).length};},
    async run(){
      if(sql.startsWith('INSERT INTO study_records')){
        assert.match(sql,/ON CONFLICT\(user_id, record_key\)/);
        assert.match(sql,/excluded.updated_at > study_records.updated_at/);
        const [user_id,record_key,value_json,updated_at,op_id]=args,key=user_id+':'+record_key,prev=db.records.get(key);
        if(isNewer({updatedAt:updated_at,opId:op_id},prev&&{updatedAt:prev.updated_at,opId:prev.op_id}))db.records.set(key,{user_id,record_key,value_json,updated_at,op_id});
      }else if(sql.startsWith('INSERT INTO correction_reports')){
        const [id,user_id,card_id,concern,created_at,status]=args;db.reports.set(id,{id,user_id,card_id,concern,created_at,status});
      }else if(sql.startsWith('UPDATE correction_reports')){const row=db.reports.get(args[1]);if(!row)return {meta:{changes:0}};row.status=args[0];}
      return {meta:{changes:1}};
    }
  };}};}
  async batch(statements){return Promise.all(statements.map(s=>s.run()));}
}
const db=new FakeD1();
const ctxA={user:userA,ownerId:userA.userId,db,now,uuid:()=> 'report-1'};
const ctxB={user:userB,ownerId:userA.userId,db,now};
const response=await safeHandle(handleSync,request('/api/sync'),{...ctxA,user:null});
assert.equal(response.status,401);
assert.equal((await safeHandle(handleSync,request('/api/sync'),ctxB)).status,409,'A stale tab must not sync after account cookies change');
assert.equal((await safeHandle(handleReports,request('/api/reports'),ctxB)).status,403);
assert.equal((await safeHandle(handleReports,request('/api/reports'),{...ctxA,ownerId:''})).status,403,'No first-visitor owner bootstrap');
assert.equal((await (await handleIdentity(request('/api/identity'),ctxA)).json()).isOwner,true);
assert.equal((await (await handleIdentity(request('/api/identity'),{...ctxA,user:null})).json()).authenticated,false);
assert.throws(()=>requireSameOrigin(new Request(base+'/api/sync',{method:'POST',headers:{origin:'https://other.example','content-type':'application/json'}})),/originate/);
assert.throws(()=>validateRecords({records:{'__bad':{value:{},updatedAt:now,opId:'1'}}},now),/Unsupported/);
assert.throws(()=>validateRecords({records:{session:{value:{},updatedAt:now+300001,opId:'1'}}},now),/invalid version/);
assert.throws(()=>validateRecords({records:{'bookmark:A':{value:'yes',updatedAt:now,opId:'1'}}},now),/must be/);
assert.throws(()=>validateRecords({records:Object.fromEntries(Array.from({length:251},(_,i)=>['bookmark:C'+i,{value:true,updatedAt:now,opId:'1'}]))},now),/250/);
const record=(value,updatedAt,opId)=>({value,updatedAt,opId});
await handleSync(request('/api/sync','POST',{records:{session:record({ids:['A']},now,'b')}}),ctxA);
await handleSync(request('/api/sync','POST',{records:{session:record({ids:['STALE']},now-1,'z')}}),ctxA);
assert.deepEqual((await (await handleSync(request('/api/sync'),ctxA)).json()).records.session.value,{ids:['A']});
await handleSync(request('/api/sync','POST',{records:{session:record({ids:['OTHER']},now,'a')}},userB.userId),ctxB);
assert.deepEqual((await (await handleSync(request('/api/sync'),ctxA)).json()).records.session.value,{ids:['A']});
assert.deepEqual((await (await handleSync(request('/api/sync','GET',undefined,userB.userId),ctxB)).json()).records.session.value,{ids:['OTHER']});
await handleSync(request('/api/sync','POST',{records:{'bookmark:A':record(false,now,'b')}}),ctxA);
assert.equal((await (await handleSync(request('/api/sync'),ctxA)).json()).records['bookmark:A'].value,false,'Removal tombstones survive sync');
const report=await handleReports(request('/api/reports','POST',{cardId:'IFR-102',concern:'Please recheck this procedure requirement.'}),ctxA);
assert.equal(report.status,201);
assert.equal((await (await handleReports(request('/api/reports'),ctxA)).json()).reports[0].cardId,'IFR-102');
assert.equal((await safeHandle(handleReports,request('/api/reports','PATCH',{id:'report-1',status:'resolved'}),ctxB)).status,403);
assert.equal((await handleReports(request('/api/reports','PATCH',{id:'report-1',status:'resolved'}),ctxA)).status,200);
assert.equal((await (await handleReports(request('/api/reports'),ctxA)).json()).reports[0].status,'resolved');
assert.equal((await safeHandle(handleReports,request('/api/reports','POST',{cardId:'<script>',concern:'Not a valid card identifier'}),ctxA)).status,400);
assert.equal((await safeHandle(handleSync,new Request(base+'/api/sync',{method:'POST',headers:{Origin:base,'Content-Type':'application/json','X-Study-User':userA.userId},body:'{bad'}),ctxA)).status,400);
console.log('PASS: API authentication, owner access, cross-origin rejection, validation, bounded requests, user isolation, atomic stale-record rejection, tombstones, report creation and resolution.');
