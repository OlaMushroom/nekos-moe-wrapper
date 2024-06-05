/**
 * Main function to handle API requests.
 *
 * @param endpoint - The API endpoint to call.
 * @param options - The options for fetch request.
 * @returns A Promise that resolves to the JSON response from the API.
 * @throws Will throw an error if the fetch request fails.
 */
async function main(endpoint: string, options: object = {}): Promise<any> {
  const url = (new URL(endpoint, "https://nekos.moe/api/v1/")).toString();
  console.log(`URL: ${url}`);

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw Error(`HTTP Error: ${res.status} ${res.statusText}`);
    return await res.json();
  } catch (err) {
    throw Error("Error: ", { cause: err });
  }
}

/**
 * Authenticates the user and returns an authorization token.
 *
 * @param _username - The username of the user.
 * @param _password - The password of the user.
 * @returns A Promise that resolves to the JSON response containing the authorization token.
 */
export async function auth(_username: string, _password: string): Promise<any> {
  return await main("auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: _username,
      password: _password
    })
  });
}

/**
 * Retrieves image data using the provided ID.
 *
 * @param id - The unique identifier of the image.
 * @returns A Promise that resolves to the JSON response containing the image data.
 */
export async function image(id: string): Promise<any> {
  return (await main(`images/${id}`)).image;
}

/**
 * Retrieves random images from the API.
 *
 * @param count - The number of random images to retrieve. Default is 1.
 * @param nsfw - An optional boolean indicating whether to retrieve NSFW images. If not provided, the API will return both SFW and NSFW images.
 * @returns A Promise that resolves to the JSON response containing the array of image data.
 */
export async function random(count: number = 1, nsfw?: boolean): Promise<any> {
  const _nsfw = nsfw !== undefined ? `&nsfw=${nsfw}` : "";
  return (await main(`random/image?count=${count}${_nsfw}`)).images;
}

/**
 * Search for specific image using body fields.
 *
 * @remarks
 * This function sends a POST request to the 'images/search' endpoint of the API.
 * It expects an object containing the search fields as the request body.
 * The function returns a Promise that resolves to the JSON response containing the array of image data.
 *
 * @param fields - An object containing the search fields.
 * @returns A Promise that resolves to the JSON response containing the array of image data.
 */
export async function search(fields: object): Promise<any> {
  return (await main("images/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(fields)
  })).images;
}

/**
 * Uploads an image to the API.
 *
 * @remarks
 * This function sends a POST request to the 'images' endpoint of the API.
 * It expects an authorization token, a File object representing the image, an array of tags, a boolean indicating whether the image is NSFW, and an optional artist name.
 * The function returns a Promise that resolves to the JSON response containing the uploaded image data.
 *
 * @param auth - The authorization token for the user.
 * @param image - The File object representing the image to be uploaded.
 * @param tags - An array of tags associated with the image.
 * @param nsfw - A boolean indicating whether the image is NSFW.
 * @param artist - An optional string representing the artist of the image.
 * @returns A Promise that resolves to the JSON response containing the uploaded image data.
 */
export async function upload(auth: string, image: File, tags: Array<string>, nsfw: boolean, artist?: string): Promise<any> {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("tags", tags.toString());
  formData.append("nsfw", nsfw.toString());
  if (artist !== undefined) formData.append("artist", artist);

  return await main("images", {
    method: "POST",
    headers: {
      "Authorization": auth,
      "Content-Type": "multipart/form-data"
    },
    body: formData
  });
}

//https://developer.mozilla.org/en-US/docs/Web/API/Response#a_php_call
