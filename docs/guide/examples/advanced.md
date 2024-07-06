# Advanced Usage

## `post.upload()`
Upload an image as pending `Post`.

```ts
const options: UploadOptions = {
  image: new File(),
  artist: 'Artist name',
  nsfw: false,
  tags: ['Array', 'of', 'tags'],
  token: 'abcdefghhijklmnopqrstuvwxyz1234567890'
}
console.log(await nekos.upload(options));
```

::: tip
You can pass "@me" as the ID, and the user's data will be returned. However, an authorization token is required.

```js{6}
const userID = "@me";
const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";

const data = await nekos.user.get(userID, authToken);
console.log(data);
```
:::