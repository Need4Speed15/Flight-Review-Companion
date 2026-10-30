import { apiContext } from '../../../server/context';
import { handleReports, safeHandle } from '../../../server/core.mjs';
export const dynamic = 'force-dynamic';
async function route(request:Request){return safeHandle(handleReports,request,await apiContext());}
export {route as GET,route as POST,route as PATCH};
