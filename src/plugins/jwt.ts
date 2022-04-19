import { FastifyPlugin, FastifyRequest, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'

module.exports = fp(async function (fastify: any, opts: any) {
  fastify.register(require("fastify-jwt"), {
    secret: opts.secret
  })

  fastify.decorate("authenticate", async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})