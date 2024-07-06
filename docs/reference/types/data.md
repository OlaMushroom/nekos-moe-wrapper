# Data types

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
