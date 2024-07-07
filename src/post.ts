import { request } from './main.ts';
import type { PostSearch } from './types.ts';

export type PostData = {
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

/** @remarks */
export const post: {
  /** @remarks */
  get(id: string): Promise<PostData>;

  /** @remarks */
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;

  /** @remarks */
  search(options?: PostSearch): Promise<PostData[]>;
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
  }
};
