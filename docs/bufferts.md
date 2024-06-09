# buffer.ts

### Specific functions for working with ArrayBuffer, Buffer, and File objects.

::: info
Some functions are not exposed for usage.
:::

## from_File_to_ArrayBuffer()

Convert a File object to ArrayBuffer.

```js{6}
import * as nekos from "@om/nekos-moe";

const text = "foo n bar";
const file = new File([text], "foobar.txt", { type: "text/plain" });

const arrayBuffer = await nekos.from_File_to_ArrayBuffer(file);

const decoder = new TextDecoder("utf-8");
console.log(decoder.decode(new Uint8Array(arrayBuffer))); // "foo n bar"
```

::: warning
Currently not working with Bun, likely due to unavailable implementation of the FileReader interface in version 1.1.12 and earlier.
:::

## createFile()

Create a File object from local image.

```js{7}
import * as nekos from "@om/nekos-moe";

const filePath = "C:/Windows/Web/Screen/img100.jpg"; // Paths are absolute.
const fileName = "an_image.jpg";
const fileType = "image/jpeg"; // Either "image/jpeg" or "image/png".

const imageFile = nekos.createFile(filePath, fileName, fileType);

// Refer to the upload() function.
const res = await nekos.upload("token", imageFile, ["tags"], false, "artist");
console.log(res);
```
