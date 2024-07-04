# Basic usage examples

## Using [`post`'s methods](/reference/post)
```ts twoslash
// @moduleResolution: bundler
import { post } from "@om/nekos-moe";
console.log(await post.get('ry7gPEpg7')); // Get a Post using ID.
console.log(await post.random(2, false)); // Get random Post(s).
console.log(await post.search({           // Search for Post(s).
  artist: 'karasusou nano',
  nsfw: false,
  limit: 3
}));
```

## Using [`user`'s methods](/reference/user)
```ts twoslash
// @moduleResolution: bundler
import { user } from "@om/nekos-moe";
console.log(await user.get('BkCBy21se')); // Get a User using ID.
console.log(await user.search({           // Search for User(s).
  query: "brussell",
  limit: 3
}));
```
