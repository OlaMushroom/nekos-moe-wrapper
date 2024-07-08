import type { PostSearch, UserSearch, UploadForm } from './types.ts';
interface PostData {
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
}

interface UserData {
  id: string;
  createdAt: string;
  email: string;
  favorites?: string[];
  favoritesReceived: number;
  likes?: string[];
  likesReceived: number;
  roles: string[];
  savedTags?: string[];
  uploads: number;
  username: string;
  verified?: boolean;
}

interface UploadData {
  image: PostData;
  image_url: string;
  post_url: string;
}

async function errorHandler(res: Response) {
  let msg = '';
  if (res.headers.get('content-type')?.includes('application/json')) {
    const data = await res.json();
    msg = `${data.message}${'id' in data ? `\nID: ${data.id}` : ''}`;
  }
  throw Error(`HTTP Error: ${res.status} ${res.statusText}\n`, { cause: msg });
}

async function sendRequest(
  endpoint: string,
  options: object = {}
): Promise<unknown> {
  const url = new URL(endpoint, 'https://nekos.moe/api/v1/');
  console.log(`URL: ${url.toString()}\nTimestamp: ${Date.now()}`);
  try {
    const res = await fetch(url, options);
    if (!res.ok) await errorHandler(res);
    return await res.json();
  } catch (e) {
    throw Error('Error: ', { cause: e });
  }
}

/**
 * Creates a new image using `File` object.
 * @remarks File name is without file extension.
 */
export function create(
  file: BlobPart,
  name: string,
  type: 'jpeg' | 'png'
): File {
  try {
    const image = new File([file], `${name}.${type}`, {
      type: `image/${type}`
    });
    console.log('File created successfully:\n%o', {
      name: image.name,
      type: image.type,
      size: image.size,
      lastModified: image.lastModified
    });
    return image;
  } catch (e) {
    throw Error('Error: ', { cause: e });
  }
}

// Post/Image
/** Get a `Post` using ID. */
export async function getPost(id: string): Promise<PostData> {
  const data = (await sendRequest(`images/${id}`)) as { image: PostData };
  return data.image;
}

/** Search for `Post`(s). */
export async function searchPost(
  options: PostSearch = {}
): Promise<PostData[]> {
  const data = (await sendRequest('images/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options)
  })) as { images: PostData[] };
  return data.images;
}

/** Get random `Post`(s). */
export async function random(count = 1, nsfw?: boolean): Promise<PostData[]> {
  const params = new URLSearchParams({ count: count.toString() });
  if (nsfw !== undefined) params.append('nsfw', nsfw.toString());
  const data = (await sendRequest(
    `random/image?count=${count}${nsfw !== undefined ? `&nsfw=${nsfw}` : ''}`
  )) as { images: PostData[] };
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
  return (await sendRequest('images', {
    method: 'POST',
    headers: {
      Authorization: form.token,
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  })) as UploadData;
}

// User
/**
 * Get a `User` using ID.
 * @remarks If `id == '@me'` and a valid token is provided, the user's data will be returned.
 */
export async function getUser(id: string, token?: string): Promise<UserData> {
  const headers = new Headers();
  if (token !== undefined) headers.append('Authorization', token);
  const data = (await sendRequest(`user/${id}`, { headers })) as {
    user: UserData;
  };
  return data.user;
}

/** Search for `User`(s). */
export async function searchUser(
  options: UserSearch = {}
): Promise<UserData[]> {
  const data = (await sendRequest('users/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options)
  })) as { users: UserData[] };
  return data.users;
}

// Auth
/** Get token. */
export async function auth(
  username: string,
  password: string
): Promise<string> {
  const data = (await sendRequest('auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })) as { token: string };
  return data.token;
}

/**
 * Regenerate token.
 * @remarks The new token will not be returned.
 */
export async function regen(token: string): Promise<void> {
  await sendRequest('auth', {
    method: 'POST',
    headers: { Authorization: token }
  });
}
