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
