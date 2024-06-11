# Getting Started

## Import package

- **Option 1**: Using `jsr:` specifier with [Deno](https://deno.com)

  ```js
  import nekos from "jsr:@om/nekos-moe";
  ```

- **Option 2**: Manually adding package

  Run:
  ::: code-group

  ```console [npm/npx]
  npx jsr add @om/nekos-moe
  ```

  ```console [pnpm]
  pnpm dlx jsr add @om/nekos-moe
  ```

  ```console [yarn]
  yarn dlx jsr add @om/nekos-moe
  ```

  ```console [deno]
  deno add @om/nekos-moe
  ```

  ```console [bun/bunx]
  bunx jsr add @om/nekos-moe
  ```

  :::

  then import the package:

  ```js
  import nekos from "@om/nekos-moe";
  ```

## What's Next?

Check out some [usage examples](/image). Alternatively, reference documentation is available at the [JSR package site](https://jsr.io/@om/nekos-moe/doc). Please also take a look at the [original API documentation](https://docs.nekos.moe).