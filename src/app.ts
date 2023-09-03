import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { rhRoutes } from './routes/rh'

export const app = fastify()

app.register(cookie)

app.register(rhRoutes, {
  prefix: 'rh',
})
