import { request } from './request.ts';
import type { UserSearch } from './types.ts';

type UserData = {
  id: string;
  createdAt: string;
  email: string;
  favorites?: string[];
  favoritesReceived: number;
  likes?: string[];
  likesReceived: number;
  roles: string[];
  savedTags?: string[];
  uploads: number;
  username: string;
  verified?: boolean;
};

/**
 * Get a `User` using ID.
 * @remarks If `id == '@me'` and a valid token is provided, the user's data will be returned.
 */
export async function get(id: string, token?: string): Promise<UserData> {
  const headers = new Headers();
  if (token !== undefined) headers.append('Authorization', token);
  const data = (await request(`user/${id}`, { headers })) as {
    user: UserData;
  };
  return data.user;
}

/** Search for `User`(s). */
export async function search(options: UserSearch = {}): Promise<UserData[]> {
  const data = (await request('users/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options)
  })) as { users: UserData[] };
  return data.users;
}

/** Get token. */
export async function tk(username: string, password: string): Promise<string> {
  const data = (await request('auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })) as { token: string };
  return data.token;
}

/**
 * Regenerate token.
 * @remarks The new token will not be returned.
 */
export async function regen(token: string): Promise<void> {
  await request('auth', {
    method: 'POST',
    headers: { Authorization: token }
  });
}
