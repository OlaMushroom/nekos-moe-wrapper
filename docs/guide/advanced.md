# Advanced Usage

## `createFile()`

Create a `File` object from a local image.

```js{7}
const filePath = "C:/Windows/Web/Screen/img100.jpg"; // Paths are absolute.
const fileName = "an_image.jpg";
const fileType = "image/jpeg"; // Either "image/jpeg" or "image/png".

const imageFile = nekos.buffer.createFile(filePath, fileName, fileType);

// Refer to image.upload().
const data = await nekos.upload("token", imageFile, ["tags"], false, "artist");
console.log(data);
```