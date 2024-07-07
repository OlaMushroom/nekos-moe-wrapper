# Interfaces and Types

## PostData
```ts
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
}
```

## UserData
```ts
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
}
```

## UploadData
```ts
type UploadData = {
  image: PostData;
  image_url: string;
  post_url: string;
}
```

## PostSearch
```ts
interface PostSearch {
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
```

## UserSearch
```ts
interface UserSearch {
  query?: string;
  skip?: number;
  limit?: number;
}
```

## UploadForm
```ts
interface UploadForm {
  image: File;
  artist?: string;
  nsfw: boolean;
  tags: string[];
  token: string;
}
```
