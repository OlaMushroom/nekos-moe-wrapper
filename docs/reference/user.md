<script setup>
import HrefBadge from '../components/HrefBadge.vue'
</script>

# `user`
**Contains methods for working with [`User`](https://docs.nekos.moe/structures.html#user-data) data.**
```ts twoslash
// @moduleResolution: bundler
import type { UserData, UserOptions } from '@om/nekos-moe/types';
type _ = 
// ---cut---
{
  get(id: string, token?: string): Promise<UserData>;
  search(options?: UserOptions): Promise<UserData[]>
}
```

## `user.get()` <Badge type="info" text="async" /> <HrefBadge text="UserData" link="/reference/types/data#userdata" />
| Parameters | Type     | Default     |
| ---------- | -------- | ----------- |
| `id`       | `string` | Required    |
| `token`    | `string` | `undefined` |

## `user.search()` <Badge type="info" text="async" /> <HrefBadge text="Array&lt;UserData&gt;" link="/reference/types/data#userdata" />
| Parameters | Type                                                  | Default |
| ---------- | ----------------------------------------------------- | ------- |
| `options`  | [`UserOptions`](/reference/types/options#useroptions) | `{}`    |
