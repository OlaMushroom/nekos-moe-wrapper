# Advanced Usage

## Using methods in [`auth`](/reference/auth)
```ts twoslash
// @moduleResolution: bundler
import { auth } from '@om/nekos-moe';
console.log(await auth.get('ilovecatgirls', '^nyaa321^')); // Get token.
await auth.regen('abcdefghhijklmnopqrstuvwxyz1234567890'); // Regenerate token.
```

## Get your user data
```ts twoslash
// @moduleResolution: bundler
import { user } from '@om/nekos-moe';
console.log(await user.get('@me', 'abcdefghhijklmnopqrstuvwxyz1234567890'));
```

## Upload an image as pending `Post`
```ts twoslash
// @moduleResolution: bundler
// @noErrors
import { readFileSync } from 'node:fs';
import { upload } from '@om/nekos-moe';

const imageFile = new File(
	[readFileSync('C:/Windows/Web/Screen/img100.jpg')],
	'img.jpg',
	{ type: 'image/jpeg' } // You can use ".png" file with "type: 'image/png'"
);

console.log(await upload({
  image: imageFile,
  artist: 'Artist name', // Optional
  nsfw: false,
  tags: ['Array', 'of', 'tags'],
  token: 'abcdefghhijklmnopqrstuvwxyz1234567890'
}));
```
