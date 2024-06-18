import { request } from './main.ts';
import type {
  PostData,
  PostFields,
  UploadData,
  UploadFields
} from './types.ts';

/**
 * Post class with static methods for interacting with the API for image-related operations.
 */
const post: any = {
  /**
   * Retrieves an image data using the provided ID.
   *
   * @param id - The unique identifier of the image.
   * @returns A Promise that resolves to the JSON response containing the image data.
   */
  async get(id: string): Promise<PostData> {
    return (await request(`images/${id}`)).image;
  },

  /**
   * Retrieves random images from the API.
   *
   * @param count - The number of random images to retrieve. Default is 1.
   * @param nsfw - An optional boolean indicating whether to retrieve NSFW images. If not provided, the API will return both SFW and NSFW images.
   * @returns A Promise that resolves to the JSON response containing an array of images.
   */
  async random(count = 1, nsfw?: boolean): Promise<PostData[]> {
    return (
      await request(
        `random/image?count=${count}${
          nsfw !== undefined ? `&nsfw=${nsfw}` : ''
        }`
      )
    ).images;
  },

  /**
   * Search for specific image using body fields.
   *
   * @param fields - An object containing the search fields.
   * @returns A Promise that resolves to the JSON response containing the array of image data.
   * @remarks
   * The function sends a POST request to the 'images/search' endpoint of the API with an object containing the search fields as the request body.
   * The function returns a Promise that resolves to the JSON response containing an array of images.
   */
  async search(fields: PostFields = {}): Promise<PostData[]> {
    return (
      await request('images/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields)
      })
    ).images;
  },

  /**
   * Uploads an image to the API.
   *
   * @param token - The authorization token for the user.
   * @param image - The File object representing the image to be uploaded.
   * @param tags - An array of tags associated with the image.
   * @param nsfw - A boolean indicating whether the image is NSFW.
   * @param artist - An optional string representing the artist of the image.
   * @returns A Promise that resolves to the JSON response containing the uploaded image data.
   * @remarks
   * The function sends a POST request to the 'images' endpoint of the API, expecting an authorization token, a File object representing the image, an array of tags, a boolean indicating whether the image is NSFW, and an optional artist name.
   * The function returns a Promise that resolves to the JSON response containing the uploaded image data.
   */
  async upload(token: string, fields: UploadFields): Promise<UploadData> {
    const formData = new FormData();
    formData.append('image', fields.image);
    formData.append('nsfw', fields.nsfw.toString());
    formData.append('tags', fields.tags.toString());
    if (fields.artist !== undefined) formData.append('artist', fields.artist);

    return await request('images', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    });
  }
};

export { post };
