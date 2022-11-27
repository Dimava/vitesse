import { z } from 'zod'

export const userId = z.string().regex(/^[\w-]+$/)

export const userSchema = z.object({
  id: userId,
  name: z.string().min(1),
  bio: z.string().optional(),
})

export type User = z.infer<typeof userSchema>
