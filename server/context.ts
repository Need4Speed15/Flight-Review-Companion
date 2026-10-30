import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '../app/chatgpt-auth';
export async function apiContext(){
  return {user:await getChatGPTUser(), ownerId:env.OWNER_USER_ID || '', db:env.DB};
}
