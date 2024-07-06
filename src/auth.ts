import { request } from './main.ts';

/**
 * Methods for interacting with authorization API endpoints.
 */
export const auth: {
  /**
   * @param username
   * @param password
   */
  get(username: string, password: string): Promise<string>;

  /**
   * @param token
   * @remarks The new authorization token will not be returned.
   */
  regen(token: string): Promise<void>;
} = {
  async get(username, password) {
    const data = (await request('auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })) as { token: string };
    return data.token;
  },
  async regen(token) {
    await request('auth', {
      method: 'POST',
      headers: { Authorization: token }
    });
  }
};
