import { request } from './main.ts';
import type { UserData, UserOptions } from './types.ts';

/**
 * Methods for interacting with user-related API endpoints.
 */
export const user: {
  /**
   * @param id
   * @param token
   * @remarks If "@me" is passed as the ID and a valid authorization token is provided, the user's data will be returned.
   */
  get(id: string, token?: string): Promise<UserData>;

  /**
   * @param options
   */
  search(options?: UserOptions): Promise<UserData[]>;
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
