import * as crypto from 'crypto'

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import createUserSchema from '../schemas/create_user'
import updateUserSchema from '../schemas/update_user'

export default async (fastify: FastifyInstance) => {

  const userRepository = new UserRepository(fastify.dataSource);

  fastify.post('/', {
    preValidation: [fastify.authenticate],
    schema: createUserSchema, attachValidation: true
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    if (request.validationError) {
      reply.code(400).send(request.validationError)
    } else {
      const body: any = request.body

      const firstName = body.firstName
      const lastName = body.lastName
      const sex = body.sex

      const username = body.username
      const password = body.password

      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      try {
        const data: any = {}
        data.first_name = firstName
        data.last_name = lastName
        data.sex = sex
        data.username = username
        data.password = encPassword

        const user: UserEntity = await userRepository.save(data)

        reply.status(201).send({ ok: true, userId: user.userId })
      } catch (error: any) {
        reply.send({ message: error.message })
      }
    }

  })

  fastify.get('/', {
    preValidation: [fastify.authenticate]
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await userRepository.list()

      reply.send(rs)
    } catch (error: any) {
      reply.send({ message: error.message })
    }
  })

  // /search?q=xxxx
  fastify.get('/search', {
    preValidation: [fastify.authenticate]
  }, async (request: FastifyRequest, reply: FastifyReply) => {

    const query: any = request.query
    const _query = query.q

    try {
      const rs: any = await userRepository.search(_query)
      reply.send(rs)
    } catch (error: any) {
      reply.send({ message: error.message })
    }
  })

  fastify.put('/:userId/edit', {
    preValidation: [fastify.authenticate],
    schema: updateUserSchema, attachValidation: true
  }, async (request: FastifyRequest, reply: FastifyReply) => {

    if (request.validationError) {
      reply.code(400).send(request.validationError)
    } else {
      const body: any = request.body
      const params: any = request.params

      const firstName = body.firstName
      const lastName = body.lastName
      const sex = body.sex

      const userId = params.userId

      try {
        await userRepository.update(userId, firstName, lastName, sex)

        reply.send({ ok: true })

      } catch (error: any) {
        reply.send({ message: error.message })
      }
    }

  })

  fastify.delete('/:userId', {
    preValidation: [fastify.authenticate]
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    const userId = params.userId

    try {
      await userRepository.delete(userId)
      reply.send({ ok: true })
    } catch (error: any) {
      reply.send({ message: error.message })
    }
  })

}
