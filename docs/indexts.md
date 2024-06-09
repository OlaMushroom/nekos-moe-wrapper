# index.ts

### Collection of package's main functions.

::: info
All functions are async.
:::

## auth()

Get authorization token.

```js{6}
import * as nekos from "@om/nekos-moe";

const username = "ilovecatgirls";
const password = "^nyaa321^";

const res = await nekos.auth(username, password);
console.log(res);
```

## get()

Get Image by ID.

```js{5}
import * as nekos from "@om/nekos-moe";

const imageId = "ry7gPEpg7";

const res = await nekos.get(imageId);
console.log(res);
```

## random()

Get random Images.

```js{6}
import * as nekos from "@om/nekos-moe";

const count = 3; // Optional. Default to 1.
const nsfw = false; // Optional.

const res = await nekos.random(count, nsfw);
console.log(res);
```

## search()

Search Images using custom fields.

```js{9}
import * as nekos from "@om/nekos-moe";

const searchFields = {
  artist: "karasusou nano",
  nsfw: false,
  limit: 5
}

const res = await nekos.search(searchFields);
console.log(res);
```

## upload()

Upload Image.

```js{12}
import * as nekos from "@om/nekos-moe";

const authToken = "abcxyz123456789";

// Refer to the createFile() function.
const imageFile = nekos.createFile("path/i.jpg", "i.jpg", "image/jpeg");

const tags = ["An", "array", "of", "tags"];
const nsfw = false;
const artist = "Artist's name"; // Optional.

const res = await nekos.upload(authToken, imageFile, tags, nsfw, artist);
console.log(res);
```