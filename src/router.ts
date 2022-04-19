import { FastifyInstance } from 'fastify';

import indexRoute from './controllers/index'
import demoRoute from './controllers/demo'
import testRoute from './controllers/test'
import userRoute from './controllers/users'
import loginRoute from './controllers/login'
import uploadRoute from './controllers/upload'
import schemaRoute from './controllers/schema'
import webServiceRoute from './controllers/webservice'

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexRoute, { prefix: '/' });
  fastify.register(demoRoute, { prefix: '/demo' });
  fastify.register(testRoute, { prefix: '/test' });
  fastify.register(userRoute, { prefix: '/users' });
  fastify.register(loginRoute, { prefix: '/login' });
  fastify.register(uploadRoute, { prefix: '/upload' });
  fastify.register(schemaRoute, { prefix: '/schema' });
  fastify.register(webServiceRoute, { prefix: '/webservice' });
}
