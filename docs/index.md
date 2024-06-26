# Getting Started

## First steps

1. Add the package:

::: code-group
```console [npm]
npx jsr add @om/nekos-moe
```

```console [pnpm]
pnpm dlx jsr add @om/nekos-moe
```

```console [yarn]
yarn dlx jsr add @om/nekos-moe
```

```console [bun]
bunx jsr add @om/nekos-moe
```

```console [deno]
deno add @om/nekos-moe
```
:::

2. Import the package and write some code:

```ts
import * as nekos from "@om/nekos-moe";

console.log(nekos.info);
```

::: tip
You can also use `jsr:` specifier to import directly without manually adding the package when using [Deno](https://deno.com)

```ts{1}
import * as nekos from "jsr:@om/nekos-moe";

console.log(nekos.info);
```
:::

## What's next?

Check out some [usage examples](/examples/basic). Alternatively, reference documentation is available at the [JSR package site](https://jsr.io/@om/nekos-moe/doc). Please also take a look at the original [API documentation](https://docs.nekos.moe).