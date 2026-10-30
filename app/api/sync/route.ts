import { apiContext } from '../../../server/context';
import { handleSync, safeHandle } from '../../../server/core.mjs';
export const dynamic = 'force-dynamic';
async function route(request:Request){return safeHandle(handleSync,request,await apiContext());}
export {route as GET,route as POST};
