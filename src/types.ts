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
  comments?: Array<unknown>;
  createdAt: string;
  favorites?: number;
  likes?: number;
  pending?: boolean;
  nsfw: string;
  tags: Array<string>;
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
  favorites?: Array<string>;
  favoritesReceived: number;
  likes?: Array<string>;
  likesReceived: number;
  roles: Array<string>;
  savedTags?: Array<string>;
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
 * Structure of Post's search fields.
 */
type PostFields = {
  id?: string;
  nsfw?: boolean;
  uploader?: string | object;
  artist?: string;
  tags?: Array<string>;
  sort?: 'newest' | 'oldest' | 'likes' | 'relevance';
  posted_before?: number; // milliseconds
  posted_after?: number; // milliseconds
  skip?: number;
  limit?: number;
};

/**
 * Structure of User's search fields.
 */
type UserFields = {
  query?: string;
  skip?: number;
  limit?: number;
};

/**
 * Structure of Upload's fields.
 */
type UploadFields = {
  image: File;
  nsfw: boolean;
  artist?: string;
  tags: Array<string>;
};

export type {
  PostData,
  UserData,
  UploadData,
  PostFields,
  UserFields,
  UploadFields
};
