/**
 * Description
 * @module
 */

/** PostSearch */
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

/** UserSearch */
export interface UserSearch {
  query?: string;
  skip?: number;
  limit?: number;
}

/** UploadForm */
export interface UploadForm {
  image: File;
  artist?: string;
  nsfw: boolean;
  tags: string[];
  token: string;
}
