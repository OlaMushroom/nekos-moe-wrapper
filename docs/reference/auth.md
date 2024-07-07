# `auth`
**Contains methods for working with [authorization](https://docs.nekos.moe/auth.html).**
```ts
const auth: {
  get(username: string, password: string): Promise<string>;
  regen(token: string): Promise<void>;
}
```
