import { request } from './main.ts';

/** @remarks */
export async function get(username: string, password: string): Promise<string> {
  const data = (await request('auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })) as { token: string };
  return data.token;
}

/** @remarks The new authorization token will not be returned. */
export async function regen(token: string): Promise<void> {
  await request('auth', {
    method: 'POST',
    headers: { Authorization: token }
  });
}
