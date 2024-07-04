/**
 * Structure of Post's data.
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
 * Structure of User's data.
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
 * Structure of Upload's data.
 */
type UploadData = {
  image: PostData;
  image_url: string;
  post_url: string;
};

/**
 * Structure of Post's search options.
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
 * Structure of User's search options.
 */
type UserOptions = {
  query?: string;
  skip?: number;
  limit?: number;
};

/**
 * Structure of Upload's options.
 */
type UploadOptions = {
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
  UploadOptions
};
