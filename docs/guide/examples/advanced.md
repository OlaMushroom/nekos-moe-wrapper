# Advanced Usage

## Get authorization token.
```ts
console.log(await nekos.auth.get('ilovecatgirls', '^nyaa321^'));
```

## Regenerate authorization token.
```ts
await nekos.auth.regen('abcdefghhijklmnopqrstuvwxyz1234567890');
```

## Get your user data
```ts
console.log(await nekos.user.get('@me', 'abcdefghhijklmnopqrstuvwxyz1234567890'));
```

## Upload an image as pending `Post`.
```ts
console.log(await nekos.upload({
  image: new File(),
  artist: 'Artist name',
  nsfw: false,
  tags: ['Array', 'of', 'tags'],
  token: 'abcdefghhijklmnopqrstuvwxyz1234567890'
}));
```
