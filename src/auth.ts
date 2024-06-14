import { request } from "./main.ts";

/**
 * An object with methods for authorization.
 */
export class Auth {
  /**
   * Returns authorization token.
   *
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @returns A Promise that resolves to the JSON response containing the authorization token.
   */
  static async get(username: string, password: string): Promise<any> {
    return await request("auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  }

  /**
   * Regenerates the authorization token.
   *
   * @param auth - The current authorization token.
   * @returns A Promise that resolves to the JSON response containing the regenerated authorization token.
   * @remarks
   * This method sends a POST request to the "auth" endpoint of the API with the current authorization token.
   * The new authorization token will not be returned.
   */
  static async regen(auth: string): Promise<any> {
    return await request("auth", {
      method: "POST",
      headers: { Authorization: auth },
    });
  }
}
