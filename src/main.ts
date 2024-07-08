import { request } from './request.ts';
import type { PostSearch, UploadForm } from './types.ts';

type PostData = {
  id: string;
  approver?: {
    id: string;
    username: string;
  };
  artist?: string;
  comments?: [];
  createdAt: string;
  favorites?: number;
  likes?: number;
  pending?: boolean;
  nsfw: string;
  tags: string[];
  uploader: {
    id: string;
    username: string;
  };
};

type UploadData = {
  image: PostData;
  image_url: string;
  post_url: string;
};

/** Get a `Post` using ID. */
export async function get(id: string): Promise<PostData> {
  const data = (await request(`images/${id}`)) as { image: PostData };
  return data.image;
}

/** Get random `Post`(s). */
export async function random(count = 1, nsfw?: boolean): Promise<PostData[]> {
  const params = new URLSearchParams({ count: count.toString() });
  if (nsfw !== undefined) params.append('nsfw', nsfw.toString());
  const data = (await request(
    `random/image?count=${count}${nsfw !== undefined ? `&nsfw=${nsfw}` : ''}`
  )) as { images: PostData[] };
  return data.images;
}

/** Search for `Post`(s). */
export async function search(options: PostSearch = {}): Promise<PostData[]> {
  const data = (await request('images/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options)
  })) as { images: PostData[] };
  return data.images;
}

/**
 * Upload an image as pending `Post`.
 * @remarks This function uses the `FormData` object and set `'Content-Type': 'multipart/form-data'` to send the data.
 */
export async function upload(form: UploadForm): Promise<UploadData> {
  const formData = new FormData();
  formData.append('image', form.image);
  formData.append('nsfw', form.nsfw.toString());
  formData.append('tags', form.tags.toString());
  if (form.artist !== undefined) formData.append('artist', form.artist);
  return (await request('images', {
    method: 'POST',
    headers: {
      Authorization: form.token,
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  })) as UploadData;
}
