<script setup>
import HrefBadge from '../components/HrefBadge.vue'
</script>

# `post` property

**Contains methods for working with [Post / Image](https://docs.nekos.moe/structures.html#post-image-data) data.**

## `post.get()` <HrefBadge text="PostData" link="/types/data#postdata" /> <Badge type="info" text="async" />

Get a `Post` by ID.
```ts
const imageID = "ry7gPEpg7";
const data = await nekos.post.get(imageID);
console.log(data);
```

## `post.random()` <HrefBadge text="Array&lt;PostData&gt;" link="/types/data#postdata" /> <Badge type="info" text="async" />

Get random `Post`s.
```ts
const count = 3; // Optional. Default to 1.
const nsfw = false; // Optional.
const data = await nekos.post.random(count, nsfw);
console.log(data);
```

## `post.search()` <HrefBadge text="Array&lt;PostData&gt;" link="/types/data#postdata" /> <Badge type="info" text="async" />

Search for `Post`s using custom fields.
```ts
const searchFields = {
  artist: "karasusou nano",
  nsfw: false,
  limit: 5
}
const data = await nekos.post.search(searchFields);
console.log(data);
```

## `post.upload()` <HrefBadge text="UploadData" link="/types/data#uploaddata" /> <Badge type="info" text="async" />

Upload a pending `Post`.
```ts
const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";
const imageFile = nekos.createFile("path/img.jpg", "img.jpg", "image/jpeg"); // Refer to createFile().
const tags = ["Array", "of", "tags"];
const nsfw = false;
const artist = "Artist's name"; // Optional.
const data = await nekos.post.upload(authToken, imageFile, tags, nsfw, artist);
console.log(data);
```
