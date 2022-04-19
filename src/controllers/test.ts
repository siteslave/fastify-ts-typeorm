import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { UserRepository } from '../repositories/user.repository'

export default async (fastify: FastifyInstance) => {

  const userRepository = new UserRepository(fastify.dataSource);

  fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await userRepository.list();
      reply.send(rs)
    } catch (error: any) {
      reply.send({ message: error.message });
    }
  })

  fastify.get('/query', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await userRepository.query();
      reply.send(rs)
    } catch (error: any) {
      reply.send({ message: error.message });
    }
  })

}
