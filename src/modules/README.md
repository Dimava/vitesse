## Modules

A custom user module system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import { type UserModule } from '~/types'

// eslint-disable-next-line no-unused-vars
export const install: UserModule = ({ app, router, isClient }) => {
  // do something
}
```
