import { request } from './main.ts';
import type { PostData } from './post.ts';
import type { UploadForm } from './types.ts';

type UploadData = {
  image: PostData;
  image_url: string;
  post_url: string;
};

/**
 * @remarks This method uses the `FormData` object and set `'Content-Type': 'multipart/form-data'` to send the data.
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
