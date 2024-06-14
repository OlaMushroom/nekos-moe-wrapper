# `image` property

**Contains methods for working with [Post / Image](https://docs.nekos.moe/structures.html#post-image-data) data.**

```js
import nekos from "@om/nekos-moe";

console.log(nekos.image);
```

[[toc]]

## `image.get()`

Get an `Image` by ID.

```js:line-numbers{5}
import nekos from "@om/nekos-moe";

const imageID = "ry7gPEpg7";

const data = await nekos.image.get(imageID);
console.log(data);
```

## `image.random()`

Get random `Image`s.

```js:line-numbers{6}
import nekos from "@om/nekos-moe";

const count = 3; // Optional. Default to 1.
const nsfw = false; // Optional.

const data = await nekos.image.random(count, nsfw);
console.log(data);
```

## `image.search()`

Search `Image`s using custom fields.

```js:line-numbers{9}
import nekos from "@om/nekos-moe";

const searchFields = {
  artist: "karasusou nano",
  nsfw: false,
  limit: 5
} // These are optional. Default to {}.

const data = await nekos.image.search(searchFields);
console.log(data);
```

## `image.upload()`

Upload an `Image`.

```js:line-numbers{12}
import nekos from "@om/nekos-moe";

const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";

// Refer to buffer.createFile().
const imageFile = nekos.buffer.createFile("path/img.jpg", "img.jpg", "image/jpeg");

const tags = ["An", "array", "of", "tags"];
const nsfw = false;
const artist = "Artist's name"; // Optional.

const data = await nekos.image.upload(authToken, imageFile, tags, nsfw, artist);
console.log(data);
```
