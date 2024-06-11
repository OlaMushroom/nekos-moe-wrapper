# `user` property

**Contains methods for working with [User](https://docs.nekos.moe/structures.html#user-data) data.**

```js
import nekos from "@om/nekos-moe";

console.log(nekos.user);
```

[[toc]]

## `user.auth.get()`

Get authorization token.

```js:line-numbers{6}
import nekos from "@om/nekos-moe";

const username = "ilovecatgirls";
const password = "^nyaa321^";

const data = await nekos.user.auth.get(username, password);
console.log(data);
```

## `user.auth.regen()`

Regenerate authorization token.

```js:line-numbers{5}
import nekos from "@om/nekos-moe";

const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";

const data = await nekos.user.auth.regen(authToken);
console.log(data);
```
:::info
The new authorization token will not be returned.
:::

## `user.get()`

Get a `User` by ID.

```js:line-numbers{5}
import nekos from "@om/nekos-moe";

const userID = "BkCBy21se";

const data = await nekos.user.get(userID);
console.log(data);
```

::: tip
You can pass "@me" as the ID, and the current user's data will be returned. However, an authorization token is required.

```js:line-numbers{6}
import nekos from "@om/nekos-moe";

const userID = "@me";
const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";

const data = await nekos.user.get(userID, authToken);
console.log(data);
```
:::

## `user.search()`

Search `User`s using custom fields.

```js:line-numbers{8}
import nekos from "@om/nekos-moe";

const searchFields = {
  query: "brussell",
  limit: 5
} // These are optional. Default to {}.

const data = await nekos.user.search(searchFields);
console.log(data);
```
