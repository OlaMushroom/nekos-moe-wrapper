<script setup>
import HrefBadge from '../components/HrefBadge.vue'
</script>

# `post` property
**Contains methods for working with [`Post`/`Image`](https://docs.nekos.moe/structures.html#post-image-data) data.**
```ts
type Post = {
  get(id: string): Promise<PostData>;
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;
  search(options?: PostOptions): Promise<PostData[]>;
}
```

## `post.get()` <Badge type="info" text="async" /> <HrefBadge text="PostData" link="/reference/types/data#postdata" />
| Parameters | Default  |
| ---------- | -------- |
| `id`       | Required |

## `post.random()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types/data#postdata" />
| Parameters | Default     |
| ---------- | ----------- |
| `count`    | `1`         |
| `nsfw`     | `undefined` |

## `post.search()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types/data#postdata" />
| Parameters | Default     |
| ---------- | ----------- |
| `options`  | `{}`        |

## `post.upload()` <Badge type="info" text="async" />

Upload a pending `Post`.
