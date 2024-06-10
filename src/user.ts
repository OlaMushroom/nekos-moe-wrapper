import { request } from "./index.ts";

/**
 * Returns an authorization token.
 *
 * @param usr - The username of the user.
 * @param pwd - The password of the user.
 * @returns A Promise that resolves to the JSON response containing the authorization token.
 */
async function auth(usr: string, pwd: string): Promise<any> {
  return await request("auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: usr,
      password: pwd
    })
  });
}

/**
 * Retrieves a user's information by their unique identifier.
 *
 * @param id - The unique identifier of the user.
 * @returns A Promise that resolves to the JSON response containing the user's information.
 */
async function get(id: string): Promise<any> {
  return (await request(`user/${id}`)).user;
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
async function search(fields: object = {}): Promise<any> {
  return (await request("users/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields)
  })).images;
}

export const user = {
  auth: auth,
  get: get,
  search: search
}