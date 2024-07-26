# First Steps

## Using the API

- ### With NPM registry
::: code-group
```shell [npm]
npm i nekos-moe
```
```shell [pnpm]
pnpm add nekos-moe
```
```shell [Yarn]
yarn add nekos-moe
```
```shell [Bun]
bun add nekos-moe
```
```shell [Deno]
deno add npm:nekos-moe
```
:::
```typescript
import * as nekos from 'nekos-moe';
```

- ### With JSR registry
::: code-group
```shell [npm]
npx jsr add @om/nekos-moe
```
```shell [pnpm]
pnpm dlx jsr add @om/nekos-moe
```
```shell [Yarn]
yarn dlx jsr add @om/nekos-moe
```
```shell [Bun]
bunx jsr add @om/nekos-moe
```
```shell [Deno]
deno add @om/nekos-moe
```
:::
```typescript
import * as nekos from '@om/nekos-moe';
```
::: tip Using import specifiers
When using [Deno](https://deno.com), you can use [`npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) or [`jsr:`](https://jsr.io/docs/native-imports) import specifiers without explicitly installing the package:
::: code-group
```typescript [NPM]
import * as nekos from 'npm:nekos-moe';
```
```typescript [JSR]
import * as nekos from 'jsr:@om/nekos-moe';
```
:::

## Using the CLI
::: code-group
```shell [npm]
npx nekos-moe
```
```shell [pnpm]
pnpm dlx nekos-moe
```
```shell [Yarn]
yarn dlx nekos-moe
```
```shell [Bun]
bunx nekos-moe
```
```shell [Deno]
deno run npm:nekos-moe
```
:::
