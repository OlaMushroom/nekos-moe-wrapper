<script setup>
import HrefBadge from '../components/HrefBadge.vue'
</script>

# `post` property
**Contains methods for working with [`Post`/`Image`](https://docs.nekos.moe/structures.html#post-image-data) data.**
```ts
type Post = {
  get(id: string): Promise<PostData>;
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;
  search(fields?: PostFields): Promise<PostData[]>;
}
```

## `post.get()` <Badge type="info" text="async" /> <HrefBadge text="PostData" link="/reference/types/data#postdata" />
| Parameters | Type     | Default  |
| ---------- | -------- | -------- |
| `id`       | `string` | Required |

## `post.random()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types/data#postdata" />
| Parameters | Type      | Default     |
| ---------- | --------- | ----------- |
| `count`    | `number`  | `1`         |
| `nsfw`     | `boolean` | `undefined` |

## `post.search()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types/data#postdata" />
| Parameters | Type           | Default     |
| ---------- | -------------- | ----------- |
| `options`  | `PostOptions`  | `{}`        |

## `post.upload()` <Badge type="info" text="async" />

Upload a pending `Post`.
```ts
const authToken = "abcdefghhijklmnopqrstuvwxyz1234567890";
const imageFile = nekos.createFile("path/img.jpg", "img.jpg", "image/jpeg"); // Refer to createFile().
const tags = ["Array", "of", "tags"];
const nsfw = false;
const artist = "Artist's name"; // Optional.
const data = await nekos.post.upload(authToken, imageFile, tags, nsfw, artist);
console.log(data);
```
