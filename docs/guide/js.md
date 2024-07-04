# Using JavaScript

1. Run the `./build.js` file to generate a single bundled `./build/index.js` file. <br />
**(Optional)** Run `tsc` command to generate corresponding d.ts files for type checking.
2. Import the package from the `./build/index.js` path. <br />
*e.g. `import * as nekos from './build/index.js'`*

::: info Using the NPM script
If you have Node.js installed, you can run the built-in npm script to generate both the js file and d.ts files:
::: code-group
```sh [npm]
npm run gen
```
```sh [yarn]
yarn run gen
```
```sh [pnpm]
pnpm run gen
```
```sh [bun]
bun run gen
```
```sh [deno]
deno task gen
```
:::
