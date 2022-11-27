import { fastifyCors } from '@fastify/cors'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import { fastifyStatic } from '@fastify/static'
import jetpack from 'fs-jetpack'
import { appRouter, createContext } from './trpc'

export const server = fastify({
  maxParamLength: 5000,
  logger: true,
})

void server.register(fastifyCors, {
  origin: 'http://localhost:4000',
  // Preflight: false,
  credentials: true,
})

void server.register(fastifyStatic, {
  root: jetpack.path('..'),
  prefix: '/package',
})

void server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
})

export default async function serve() {
  await server.listen({ port: 3000 })
  console.log('Server is listening at port 3000')
}
