import { request } from "./index.ts";

/**
 * Retrieves image data using the provided ID.
 *
 * @param id - The unique identifier of the image.
 * @returns A Promise that resolves to the JSON response containing the image data.
 */
async function get(id: string): Promise<any> {
  return (await request(`images/${id}`)).image;
}

/**
 * Retrieves random images from the API.
 *
 * @param count - The number of random images to retrieve. Default is 1.
 * @param nsfw - An optional boolean indicating whether to retrieve NSFW images. If not provided, the API will return both SFW and NSFW images.
 * @returns A Promise that resolves to the JSON response containing an array of images.
 */
async function random(count: number = 1, nsfw?: boolean): Promise<any> {
  return (await request(`random/image?count=${count}${nsfw !== undefined ? `&nsfw=${nsfw}` : ""}`)).images;
}

/**
 * Search for specific image using body fields.
 * 
 * @param fields - An object containing the search fields.
 * @returns A Promise that resolves to the JSON response containing the array of image data.
 * @remarks
 * The function sends a POST request to the 'images/search' endpoint of the API with an object containing the search fields as the request body.
 * The function returns a Promise that resolves to the JSON response containing an array of images.
 */
async function search(fields: object = {}): Promise<any> {
  return (await request("images/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields)
  })).images;
}

/**
 * Uploads an image to the API.
 *
 * @param auth - The authorization token for the user.
 * @param image - The File object representing the image to be uploaded.
 * @param tags - An array of tags associated with the image.
 * @param nsfw - A boolean indicating whether the image is NSFW.
 * @param artist - An optional string representing the artist of the image.
 * @returns A Promise that resolves to the JSON response containing the uploaded image data.
 * @remarks
 * The function sends a POST request to the 'images' endpoint of the API, expecting an authorization token, a File object representing the image, an array of tags, a boolean indicating whether the image is NSFW, and an optional artist name.
 * The function returns a Promise that resolves to the JSON response containing the uploaded image data.
 */
async function upload(auth: string, image: File, tags: Array<string>, nsfw: boolean, artist?: string): Promise<any> {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("tags", tags.toString());
  formData.append("nsfw", nsfw.toString());
  if (artist !== undefined) formData.append("artist", artist);

  return await request("images", {
    method: "POST",
    headers: {
      "Authorization": auth,
      "Content-Type": "multipart/form-data"
    },
    body: formData
  });
}

export const image = { get, random, search, upload }
