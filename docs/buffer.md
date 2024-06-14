---
search: false
---
# `buffer` property

**Contains specific methods for working with `ArrayBuffer`, `Buffer`, and `File` objects.**

```js
import nekos from "@om/nekos-moe";

console.log(nekos.buffer);
```

[[toc]]

## `buffer.createFile()`

Create a `File` object from a local image.

```js:line-numbers{7}
import nekos from "@om/nekos-moe";

const filePath = "C:/Windows/Web/Screen/img100.jpg"; // Paths are absolute.
const fileName = "an_image.jpg";
const fileType = "image/jpeg"; // Either "image/jpeg" or "image/png".

const imageFile = nekos.buffer.createFile(filePath, fileName, fileType);

// Refer to image.upload().
const data = await nekos.upload("token", imageFile, ["tags"], false, "artist");
console.log(data);
```
## `buffer.fromArrayBuffertoBuffer()`

Convert an `ArrayBuffer` to a `Buffer`.

```js:line-numbers{10}
import { writeFileSync } from "node:fs";
import nekos from "@om/nekos-moe";

// Refer to buffer.createFile().
const imageFile = nekos.buffer.createFile("path/img.jpg", "img.jpg", "image/jpeg");

//Refer to buffer.fromFiletoArrayBuffer()
const arrayBuffer = await nekos.buffer.fromFiletoArrayBuffer(file);

const buffer = nekos.buffer.fromArrayBuffertoBuffer(arrayBuffer);

writeFileSync("./img.jpg", buffer);
```

## `buffer.fromBuffertoArrayBuffer()`

Convert a `Buffer` to an `ArrayBuffer`.

```js:line-numbers{6}
import { readFileSync, writeFileSync } from "node:fs";
import nekos from "@om/nekos-moe";

const buffer = readFileSync("C:/Windows/Web/Screen/img100.jpg");

const arrayBuffer = nekos.buffer.fromBuffertoArrayBuffer(buffer);

writeFileSync("./img.jpg", new Uint8Array(arrayBuffer));
```

## `buffer.fromFiletoArrayBuffer()`

Convert a `File` object to an `ArrayBuffer`.

```js:line-numbers{6}
import nekos from "@om/nekos-moe";

const text = "foo n bar";
const file = new File([text], "foobar.txt", { type: "text/plain" });

const arrayBuffer = await nekos.buffer.fromFiletoArrayBuffer(file);

const decoder = new TextDecoder("utf-8");
console.log(decoder.decode(new Uint8Array(arrayBuffer))); // "foo n bar"
```

::: warning
Currently not working with Bun, likely due to unavailable implementation of the `FileReader` interface in version 1.1.12 and earlier.
:::
