# Advanced Usage

## `createFile()`

Create a `File` object from a local image.

```js{7}
const filePath = "C:/Windows/Web/Screen/img100.jpg"; // Paths are absolute.
const fileName = "an_image.jpg";
const fileType = "image/jpeg"; // Either "image/jpeg" or "image/png".
const imageFile = nekos.buffer.createFile(filePath, fileName, fileType);
```

## `upload()`
```ts
const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";
const imageFile = nekos.createFile("path/img.jpg", "img.jpg", "image/jpeg");
const tags = ["Array", "of", "tags"];
const nsfw = false;
const artist = "Artist's name"; // Optional.
console.log(await nekos.post.upload(authToken, imageFile, tags, nsfw, artist));
```
