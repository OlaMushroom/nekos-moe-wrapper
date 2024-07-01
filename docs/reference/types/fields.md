# Body field types

## PostFields
```ts
type PostFields = {
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

## UserFields
```ts
type UserFields = {
  query?: string;
  skip?: number;
  limit?: number;
}
```

## UploadFields

```ts
type UploadFields = {
  image: File;
  nsfw: boolean;
  artist?: string;
  tags: string[];
}
```