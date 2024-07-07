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

/** @remarks */
export const user: {
  /**
   * @remarks If "@me" is passed as the ID and a valid authorization token is provided, the user's data will be returned.
   */
  get(id: string, token?: string): Promise<UserData>;

  /** @remarks */
  search(options?: UserSearch): Promise<UserData[]>;
} = {
  async get(id, token) {
    const headers = new Headers();
    if (token !== undefined) headers.append('Authorization', token);
    const data = (await request(`user/${id}`, { headers })) as {
      user: UserData;
    };
    return data.user;
  },
  async search(options = {}) {
    const data = (await request('users/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options)
    })) as { users: UserData[] };
    return data.users;
  }
};
