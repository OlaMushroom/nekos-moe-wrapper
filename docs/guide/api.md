# API Usage Examples

## Basic
```typescript twoslash
// @moduleResolution: bundler
import {
  getPost,
  searchPost,
  random,
  getUser,
  searchUser,
  auth,
  regen
} from 'nekos-moe';

console.log(await getPost('ry7gPEpg7'));
console.log(await searchPost({
  artist: 'karasusou nano',
  nsfw: false,
  limit: 3
}));

console.log(await random(2, false));

console.log(await getUser('BkCBy21se'));
console.log(await searchUser({
  query: 'brussell',
  limit: 3
}));

// Requires auth token:
const token = await auth('ilovecatgirls', '^nyaa321^');
console.log(await getUser('@me', token));
await regen(token);
```

## Advanced
```typescript twoslash
// @moduleResolution: bundler
// @noErrors
import { readFileSync } from 'node:fs';
import { create, upload } from 'nekos-moe';

const imageFile = create(
  readFileSync('C:/Windows/Web/Screen/img100.jpg'),
  'img',
  'jpeg'
);

console.log(await upload({
  image: imageFile,
  artist: 'Artist name',
  nsfw: false,
  tags: ['Array', 'of', 'tags'],
  token: 'abcdefghhijklmnopqrstuvwxyz1234567890'
}));
```
