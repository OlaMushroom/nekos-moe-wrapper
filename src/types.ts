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

type PostFields = {
  id?: string;
  nsfw?: boolean;
  uploader?: string | {};
  artist?: string;
  tags: string[];
  sort?: "newest" | "oldest" | "likes" | "relevance";
  posted_before?: number; // milliseconds
  posted_after?: number; // milliseconds
  skip?: number;
  limit?: number;
};

type UserFields = {
  query?: string;
  skip?: number;
  limit?: number;
};

type UploadFields = {
  image: File;
  nsfw: boolean;
  artist?: string;
  tags: string[];
};

export type { PostData, UserData, PostFields, UserFields, UploadFields };
