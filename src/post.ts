import { request } from './main.ts';
import type {
  PostData,
  PostOptions,
  UploadData,
  UploadFields
} from './types.ts';

/**
 * Methods for interacting with post-related API endpoints.
 */
export const post: {
  /**
   * @param id
   */
  get(id: string): Promise<PostData>;

  /**
   * @param count
   * @param nsfw
   */
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;

  /**
   * @param options
   */
  search(options?: PostOptions): Promise<PostData[]>;

  /**
   * @param options
   * @remarks This method uses the `FormData` object to send the data.
   */
  upload(options: UploadFields): Promise<UploadData>;
} = {
  async get(id) {
    const data = (await request(`images/${id}`)) as { image: PostData };
    return data.image;
  },
  async random(count = 1, nsfw) {
    const params = new URLSearchParams({ count: count.toString() });
    if (nsfw !== undefined) params.append('nsfw', nsfw.toString());
    const data = (await request(
      `random/image?count=${count}${nsfw !== undefined ? `&nsfw=${nsfw}` : ''}`
    )) as { images: PostData[] };
    return data.images;
  },
  async search(options = {}) {
    const data = (await request('images/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options)
    })) as { images: PostData[] };
    return data.images;
  },
  async upload(options) {
    const formData = new FormData();
    formData.append('image', options.image);
    formData.append('nsfw', options.nsfw.toString());
    formData.append('tags', options.tags.toString());
    if (options.artist !== undefined) formData.append('artist', options.artist);
    return (await request('images', {
      method: 'POST',
      headers: {
        Authorization: options.token,
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })) as UploadData;
  }
};
