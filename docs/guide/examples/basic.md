# Basic usage examples

## [Get a `Post` using ID](/reference/post#post-get)
```ts twoslash
// @moduleResolution: bundler
import * as nekos from "@om/nekos-moe"
// ---cut---
const imageID: string = 'ry7gPEpg7';
console.log(await nekos.post.get(imageID));
```

## [Get random `Post`(s)](/reference/post#post-random)
```ts twoslash
// @moduleResolution: bundler
import * as nekos from "@om/nekos-moe"
// ---cut---
const count = 2, nsfw = false;
console.log(await nekos.post.random(count, nsfw));
```

## [Search for `Post`(s)](/reference/post#post-search)
```ts twoslash
// @moduleResolution: bundler
import * as nekos from "@om/nekos-moe"
// ---cut---
const options = {
  artist: 'karasusou nano',
  nsfw: false,
  limit: 3
}
console.log(await nekos.post.search(options));
```

## Get a `User` using ID
```ts twoslash
// @moduleResolution: bundler
import * as nekos from "@om/nekos-moe"
// ---cut---
const userID = 'BkCBy21se';
console.log(await nekos.user.get(userID));
```

## Search for `User`(s)
```ts twoslash
// @moduleResolution: bundler
import * as nekos from "@om/nekos-moe"
// ---cut---
const options = {
  query: "brussell",
  limit: 3
}
console.log(await nekos.user.search(options));
```
