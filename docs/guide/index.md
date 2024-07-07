# Getting Started

## First steps
1. Add the package:
::: code-group
```sh [npm]
npx jsr add @om/nekos-moe
```
```sh [yarn]
yarn dlx jsr add @om/nekos-moe
```
```sh [pnpm]
pnpm dlx jsr add @om/nekos-moe
```
```sh [bun]
bunx jsr add @om/nekos-moe
```
```sh [deno]
deno add @om/nekos-moe
```
:::

2. Import the package and write some code:
```js
import * as nekos from '@om/nekos-moe';
console.log(nekos.info);
```
::: info Import using `jsr:` specifier
You can also use [`jsr:` specifier](https://jsr.io/docs/native-imports) to import directly when using [Deno](https://deno.com).
```js
import * as nekos from 'jsr:@om/nekos-moe';
```
:::

## Further reading
- [Usage examples](/guide/basic)
- [JSR package documentation](https://jsr.io/@om/nekos-moe/doc)
- [Original API documentation](https://docs.nekos.moe)