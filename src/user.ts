import { request } from "./main.ts";

/**
 * A class with methods for interacting with user-related API endpoints.
 */
export class User {
  /**
   * Retrieves a user's information using provided ID.
   *
   * @param id - The unique identifier of the user.
   * @param auth - An optional authorization token.
   * @returns A Promise that resolves to the JSON response containing the user's information.
   * @remarks
   * If "@me" is passed as the ID, the current user's data will be returned. In this case, an authorization token is needed.
   * The function returns a Promise that resolves to the JSON response containing the user's information.
   */
  static async get(id: string, auth?: string): Promise<any> {
    const headers = new Headers();
    if (auth !== undefined) headers.append("Authorization", auth);
    return (await request(`user/${id}`, { headers })).user;
  }

  /**
   * Performs a search operation on the user's data.
   *
   * @param fields - An optional object containing search criteria.
   * @returns A Promise that resolves to the JSON response containing the search results.
   * @remarks
   * The function sends a POST request to the "users/search" endpoint of the API with an object containing the search fields as the request body.
   * The function returns a Promise that resolves to the JSON response containing an array of users.
   */
  static async search(fields: object = {}): Promise<any> {
    return (
      await request("users/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })
    ).users;
  }
}

/**
 * A class with methods for authorization.
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
  static async regen(token: string): Promise<any> {
    return await request("auth", {
      method: "POST",
      headers: { Authorization: token },
    });
  }
}
