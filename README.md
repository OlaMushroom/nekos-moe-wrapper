# Nekos.moe.js

Refer to the [API docs](https://docs.nekos.moe)

## Getting Started

- Using `jsr:` specifiers with [Deno](https://deno.com):

  ```js
  import * as nekos from "jsr:@om/nekos-moe";
  ```

- Manually adding package:

  ```console
  deno add @om/nekos-moe # deno
  # or
  bun x jsr add @om/nekos-moe # bun
  ```

  then add the following

  ```js
  import * as nekos from "@om/nekos-moe";
  ```

## Usage

```js
console.log(await nekos.random()); // Get random image data.
```

---

This project was created using `bun init` in bun v1.1.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
