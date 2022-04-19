import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import demoSchema from '../schemas/demo'
import querySchema from '../schemas/query'
import headerSchema from '../schemas/header'

export default async (fastify: FastifyInstance) => {

  fastify.post('/demo', { schema: demoSchema, attachValidation: true }, (request: FastifyRequest, reply: FastifyReply) => {
    if (request.validationError) {
      reply.code(400).send(request.validationError)
    } else {
      reply.send({ ok: true })
    }
  })

  fastify.get('/query', { schema: querySchema, attachValidation: true }, (request: FastifyRequest, reply: FastifyReply) => {
    if (request.validationError) {
      console.log(request.validationError)
      reply.code(400).send({ ok: false, error: 'กรุณาระบุคำค้นหา' })
    } else {
      reply.send({ ok: true })
    }
  })

  fastify.get('/header', { schema: headerSchema, attachValidation: true }, (request: FastifyRequest, reply: FastifyReply) => {
    if (request.validationError) {
      console.log(request.validationError)
      reply.code(400).send({ ok: false, error: 'ไม่มีสิทธิ์เข้าใช้งาน' })
    } else {
      reply.send({ ok: true })
    }
  })

}
