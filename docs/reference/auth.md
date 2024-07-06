# `auth`
**Contains methods for working with [authorization](https://docs.nekos.moe/auth.html).**
```ts
{
  get(username: string, password: string): Promise<string>;
  regen(token: string): Promise<void>
}
```

## `auth.get()`

Get authorization token.

```js{6}
const username = "ilovecatgirls";
const password = "^nyaa321^";

const data = await nekos.auth.get(username, password);
console.log(data);
```

## `auth.regen()`

Regenerate authorization token.

```js{5}
const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";

const data = await nekos.auth.regen(authToken);
console.log(data);
```

:::info
The new authorization token will not be returned.
:::
