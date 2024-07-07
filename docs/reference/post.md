<script setup>
import HrefBadge from '../components/HrefBadge.vue'
</script>

# `post`
**Contains methods for working with [`Post`/`Image`](https://docs.nekos.moe/structures.html#post-image-data) data.**
```ts
const post: {
  get(id: string): Promise<PostData>;
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;
  search(options?: PostSearch): Promise<PostData[]>;
}
```

## `post.get()` <Badge type="info" text="async" /> <HrefBadge text="PostData" link="/reference/types#postdata" />
| Parameters | Type     | Default  |
| ---------- | -------- | -------- |
| `id`       | `string` | Required |

## `post.random()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types#postdata" />
| Parameters | Type       | Default     |
| ---------- | ---------- | ----------- |
| `count`    | `number?`  | `1`         |
| `nsfw`     | `boolean?` | `undefined` |

## `post.search()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types#postdata" />
| Parameters | Type                                        | Default |
| ---------- | ------------------------------------------- | ------- |
| `options`  | [`PostSearch`](/reference/types#postsearch) | `{}`    |
