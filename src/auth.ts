import { request } from './main.ts';

/** @remarks */
export const auth: {
  /** @remarks */
  get(username: string, password: string): Promise<string>;

  /**
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
