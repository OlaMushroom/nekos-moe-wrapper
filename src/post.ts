import { request } from './main.ts';
import type {
  PostData,
  PostOptions,
  UploadData,
  UploadOptions
} from './types.ts';

type Post = {
  get(id: string): Promise<PostData>;
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;
  search(options?: PostOptions): Promise<PostData[]>;
  upload(options: UploadOptions): Promise<UploadData>;
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
  async random(count = 1, nsfw) {
    const params = new URLSearchParams({ count: count.toString() });
    if (nsfw !== undefined) params.append('nsfw', nsfw.toString());
    const data = (await request(
      `random/image?count=${count}${nsfw !== undefined ? `&nsfw=${nsfw}` : ''}`
    )) as { images: PostData[] };
    return data.images;
  },

  /**
   * Search for specific images.
   *
   * @param options - An object containing the search options.
   * @returns A Promise that resolves to the JSON response containing the array of image data.
   */
  async search(options = {}) {
    const data = (await request('images/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options)
    })) as { images: PostData[] };
    return data.images;
  },

  /**
   * Uploads an image to the API.
   *
   * @param options - The options for the image upload.
   * @returns A Promise that resolves to the JSON response containing the uploaded image data.
   * @remarks
   * This method uses the `FormData` object to send the image data along with other parameters.
   * The `Content-Type` header is set to `'multipart/form-data'` to indicate that the request contains form data.
   */
  async upload(options): Promise<UploadData> {
    const formData = new FormData();
    formData.append('image', options.image);
    formData.append('nsfw', options.nsfw.toString());
    formData.append('tags', options.tags.toString());
    if (options.artist !== undefined) formData.append('artist', options.artist);

    return (await request('images', {
      method: 'POST',
      headers: {
        'Authorization': options.token,
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })) as UploadData;
  }
};

export { post };
