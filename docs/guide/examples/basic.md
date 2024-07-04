# Basic usage examples

## [Get a `Post` using ID](/reference/post#post-get)
```ts
const imageID = 'ry7gPEpg7';
console.log(await nekos.post.get(imageID));
```

## [Get random `Post`(s)](/reference/post#post-random)
```ts
const count = 3;
const nsfw = false;
console.log(await nekos.post.random(count, nsfw));
```

## [Search for `Post`(s)](/reference/post#post-search)
```ts
const options: PostOptions = {
  artist: 'karasusou nano',
  nsfw: false,
  limit: 5
}
console.log(await nekos.post.search(options));
```
