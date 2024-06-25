<script setup>
import HrefBadge from '../components/HrefBadge.vue'
</script>

# `post` property

**Contains methods for working with [Post / Image](https://docs.nekos.moe/structures.html#post-image-data) data.**

## `post.get()` <HrefBadge text="PostData" link="/types/data#postdata" /> <Badge type="info" text="async" />

Get an `Post` by ID.

```ts
const imageID = "ry7gPEpg7";
const data = await nekos.post.get(imageID);
console.log(data);
```

## `post.random()` <HrefBadge text="Array&lt;PostData&gt;" link="/types/data#postdata" /> <Badge type="info" text="async" />

Get random `Image`s.

```ts
const count = 3; // Optional. Default to 1.
const nsfw = false; // Optional.
const data = await nekos.post.random(count, nsfw);
console.log(data);
```

## `post.search()`

Search `Image`s using custom fields.

```js{9}
const searchFields = {
  artist: "karasusou nano",
  nsfw: false,
  limit: 5
} // These are optional. Default to {}.

const data = await nekos.post.search(searchFields);
console.log(data);
```

## `post.upload()`

Upload an `Image`.

```js{12}
const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";

// Refer to createFile().
const imageFile = nekos.createFile("path/img.jpg", "img.jpg", "image/jpeg");

const tags = ["An", "array", "of", "tags"];
const nsfw = false;
const artist = "Artist's name"; // Optional.

const data = await nekos.post.upload(authToken, imageFile, tags, nsfw, artist);
console.log(data);
```
