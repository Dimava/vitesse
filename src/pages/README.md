## File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
// eslint-disable-next-line no-unused-vars
import { isDark } from '../../../../composables'
```

now, you can use

```ts
// eslint-disable-next-line no-unused-vars
import { isDark } from '~/composables'
```
