# Basic usage examples

## Get a `Post` by ID
```ts
const imageID = "ry7gPEpg7";
const data = await nekos.post.get(imageID);
console.log(data);
```

## Get random `Post`s.
```ts
const count = 3;
const nsfw = false;
const data = await nekos.post.random(count, nsfw);
console.log(data);
```