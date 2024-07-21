# First Steps

## Using the API

### With NPM registry
::: code-group
```sh [npm]
npm i nekos-moe
```
```sh [pnpm]
pnpm add nekos-moe
```
```sh [Yarn]
yarn add nekos-moe
```
```sh [Bun]
bun add nekos-moe
```
```sh [Deno]
deno add npm:nekos-moe
```
:::
```ts
import * as nekos from 'nekos-moe';
```

### With JSR registry
::: code-group
```sh [npm]
npx jsr add @om/nekos-moe
```
```sh [pnpm]
pnpm dlx jsr add @om/nekos-moe
```
```sh [Yarn]
yarn dlx jsr add @om/nekos-moe
```
```sh [Bun]
bunx jsr add @om/nekos-moe
```
```sh [Deno]
deno add @om/nekos-moe
```
:::
```ts
import * as nekos from '@om/nekos-moe';
```
::: tip Using import specifiers
When using [Deno](https://deno.com), you can use [`npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) or [`jsr:`](https://jsr.io/docs/native-imports) import specifiers:
::: code-group
```ts [NPM]
import * as nekos from 'npm:nekos-moe';
```
```ts [JSR]
import * as nekos from 'jsr:@om/nekos-moe';
```
:::

## Using the CLI
::: code-group
```sh [npm]
npx nekos-moe
```
```sh [pnpm]
pnpm dlx nekos-moe
```
```sh [Yarn]
yarn dlx nekos-moe
```
```sh [Bun]
bunx nekos-moe
```
```sh [Deno]
deno run npm:nekos-moe
```
:::
