# Interfaces

## Usable
```ts
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

export interface UserSearch {
  query?: string;
  skip?: number;
  limit?: number;
}

export interface UploadForm {
  image: File;
  artist?: string;
  nsfw: boolean;
  tags: string[];
  token: string;
}
```

## Data
```ts
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
```
