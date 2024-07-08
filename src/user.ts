import { request } from './main.ts';
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

/** @remarks If "@me" is passed as the ID and a valid authorization token is provided, the user's data will be returned. */
export async function get(id: string, token?: string): Promise<UserData> {
  const headers = new Headers();
  if (token !== undefined) headers.append('Authorization', token);
  const data = (await request(`user/${id}`, { headers })) as {
    user: UserData;
  };
  return data.user;
}

/** @remarks */
export async function search(options: UserSearch = {}): Promise<UserData[]> {
  const data = (await request('users/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options)
  })) as { users: UserData[] };
  return data.users;
}
