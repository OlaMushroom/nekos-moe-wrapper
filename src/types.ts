/**
 * @module
 */

/**
 * Post data.
 */
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

/**
 * User data.
 */
type UserData = {
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
};

/**
 * Upload data.
 */
type UploadData = {
  image: PostData;
  image_url: string;
  post_url: string;
};

/**
 * Post search options.
 */
type PostOptions = {
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
};

/**
 * User search options.
 */
type UserOptions = {
  query?: string;
  skip?: number;
  limit?: number;
};

/**
 * Upload fields.
 */
type UploadFields = {
  image: File;
  artist?: string;
  nsfw: boolean;
  tags: string[];
  token: string;
};

export type {
  PostData,
  UserData,
  UploadData,
  PostOptions,
  UserOptions,
  UploadFields
};
