import { apiContext } from '../../../server/context';
import { handleIdentity, safeHandle } from '../../../server/core.mjs';
export const dynamic = 'force-dynamic';
export async function GET(request:Request){return safeHandle(handleIdentity,request,await apiContext());}
