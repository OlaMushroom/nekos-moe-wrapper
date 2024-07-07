/**
 * @module
 */

/** @remarks */
export interface PostSearch {
  id?: string;
  nsfw?: boolean;
  uploader?: string | object;
  artist?: string;
  tags?: string[];
  sort?: 'newest' | 'oldest' | 'likes' | 'relevance';
  posted_before?: number; // milliseconds
  posted_after?: number; // milliseconds
  skip?: number;
  limit?: number;
}

/** @remarks */
export interface UserSearch {
  query?: string;
  skip?: number;
  limit?: number;
}

/** @remarks */
export interface UploadForm {
  image: File;
  artist?: string;
  nsfw: boolean;
  tags: string[];
  token: string;
}
