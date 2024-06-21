import { request } from './main.ts';
import type {
  PostData,
  PostFields,
  UploadData,
  UploadFields
} from './types.ts';

type Post = {
  get(id: string): Promise<PostData>;
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;
  search(fields?: PostFields): Promise<PostData[]>;
};

/**
 * Methods for interacting with the API for image-related operations.
 */
const post: Post = {
  /**
   * Retrieves an image data using the provided ID.
   *
   * @param id - The unique identifier of the image.
   * @returns A Promise that resolves to the JSON response containing the image data.
   */
  async get(id) {
    const data = (await request(`images/${id}`)) as { image: PostData };
    return data.image;
  },

  /**
   * Retrieves random images from the API.
   *
   * @param count - The number of random images to retrieve
   * @param nsfw - An optional boolean indicating whether to retrieve NSFW images. If not provided, the API will return both SFW and NSFW images.
   * @returns A Promise that resolves to the JSON response containing an array of images.
   */
  async random(count, nsfw) {
    const data = (await request(
      `random/image${count !== undefined ? `?count=${count}` : ''}${nsfw !== undefined ? `&nsfw=${nsfw}` : ''}`
    )) as { images: PostData[] };
    return data.images;
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
  async search(fields = {}) {
    const data = (await request('images/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fields)
    })) as { images: PostData[] };
    return data.images;
  }
};

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
async function upload(
  token: string,
  fields: UploadFields
): Promise<UploadData> {
  const formData = new FormData();
  formData.append('image', fields.image);
  formData.append('nsfw', fields.nsfw.toString());
  formData.append('tags', fields.tags.toString());
  if (fields.artist !== undefined) formData.append('artist', fields.artist);

  return (await request('images', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  })) as UploadData;
}

export { post, upload };
