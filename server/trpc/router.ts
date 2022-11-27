import { z } from 'zod'
import { t } from './t'

interface User {
  id: string
  name: string
  bio?: string
}

const users: Record<string, User> = {}

users.bilbo = { id: 'bilbo', name: 'Bilbo', bio: 'The Bilbo user' }

export const userRouter = t.router({
  getUserById: t.procedure.input(z.string()).query(({ input }) =>
    users[input], // Input type is string
  ),
  createUser: t.procedure
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      }),
    )
    .mutation(({ input }) => {
      console.log(input)
      const id = Date.now().toString()
      const user: User = { id, ...input }
      users[user.id] = user
      return user
    }),
})
export const appRouter = t.mergeRouters(userRouter)

// Export type definition of API
export type AppRouter = typeof appRouter
