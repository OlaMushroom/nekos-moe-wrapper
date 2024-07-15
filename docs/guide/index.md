# First Steps

## Import the package

### Using NPM registry
::: code-group
```sh [npm]
npm i nekos-moe
```
```sh [yarn]
yarn add nekos-moe
```
```sh [pnpm]
pnpm add nekos-moe
```
```sh [bun]
bun add nekos-moe
```
:::
```ts
import * as nekos from 'nekos-moe';
```

### Using JSR registry
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
:::
```ts
import * as nekos from '@om/nekos-moe';
```

## Write some code
```ts twoslash
// @moduleResolution: bundler
import * as nekos from 'nekos-moe';
//---cut---
// ...
console.log(nekos._links);
```
