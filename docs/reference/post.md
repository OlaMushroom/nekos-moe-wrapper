<script setup>
import HrefBadge from '../components/HrefBadge.vue'
</script>

# `post` object
**Contains methods for working with [`Post`/`Image`](https://docs.nekos.moe/structures.html#post-image-data) data.**
```ts
type Post = {
  get(id: string): Promise<PostData>;
  random(count?: number, nsfw?: boolean): Promise<PostData[]>;
  search(options?: PostOptions): Promise<PostData[]>;
  upload(options: UploadOptions): Promise<UploadData>;
}
```

## `post.get()` <Badge type="info" text="async" /> <HrefBadge text="PostData" link="/reference/types/data#postdata" />
| Parameters | Type     | Default  |
| ---------- | -------- | -------- |
| `id`       | `string` | Required |

## `post.random()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types/data#postdata" />
| Parameters | Type       | Default     |
| ---------- | ---------- | ----------- |
| `count`    | `number?`  | `1`         |
| `nsfw`     | `boolean?` | `undefined` |

## `post.search()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;PostData&gt;" link="/reference/types/data#postdata" />
| Parameters | Type                                                  | Default |
| ---------- | ----------------------------------------------------- | ------- |
| `options`  | [`PostOptions`](/reference/types/options#postoptions) | `{}`    |

## `post.upload()` <Badge type="info" text="async" /> <HrefBadge text="UploadData" link="/reference/types/data#uploaddata" />
| Parameters | Type                                                      | Default  |
| ---------- | --------------------------------------------------------- | -------- |
| `options`  | [`UploadOptions`](/reference/types/options#uploadoptions) | Required |

