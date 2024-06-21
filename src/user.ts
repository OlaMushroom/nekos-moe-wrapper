import { request } from './main.ts';
import type { UserData, UserFields } from './types.ts';

type User = {
  get(id: string, token?: string): Promise<UserData>;
  search(fields?: UserFields): Promise<UserData[]>;
};

/**
 * Methods for interacting with user-related API endpoints.
 */
const user: User = {
  /**
   * Retrieves a user's information using provided ID.
   *
   * @param id - The unique identifier of the user.
   * @param token - An optional authorization token.
   * @returns A Promise that resolves to the JSON response containing the user's information.
   * @remarks
   * If "@me" is passed as the ID, the current user's data will be returned. In this case, an authorization token is needed.
   * The function returns a Promise that resolves to the JSON response containing the user's information.
   */
  async get(id, token) {
    const headers = new Headers();
    if (token !== undefined) headers.append('Authorization', token);
    const data = (await request(`user/${id}`, { headers })) as {
      user: UserData;
    };
    return data.user;
  },

  /**
   * Performs a search operation on the user's data.
   *
   * @param fields - An optional object containing search criteria.
   * @returns A Promise that resolves to the JSON response containing the search results.
   * @remarks
   * The function sends a POST request to the "users/search" endpoint of the API with an object containing the search fields as the request body.
   * The function returns a Promise that resolves to the JSON response containing an array of users.
   */
  async search(fields = {}) {
    const data = (await request('users/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fields)
    })) as { users: UserData[] };
    return data.users;
  }
};

export { user };
