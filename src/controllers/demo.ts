import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async (fastify: FastifyInstance) => {

  fastify.post('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Message from POST method' })
  })

  fastify.post('/params', (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password

    console.log({ username })
    console.log({ password })

    reply.send(body)
  })

  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Message from GET method' })
  })

  fastify.get('/:firstName/:lastName', (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    const firstName = params.firstName
    const lastName = params.lastName

    reply.send({ firstName, lastName })
  })

  fastify.get('/query', (request: FastifyRequest, reply: FastifyReply) => {
    const query = request.query
    reply.send(query)
  })

  fastify.put('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Message from PUT method' })
  })

  fastify.put('/:userId', (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const params: any = request.params

    const username = body.username
    const password = body.password
    const userId = params.userId

    reply.send({ username, password, userId })
  })

  fastify.delete('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Message from DELETE method' })
  })

  fastify.delete('/:userId', (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params

    const userId = params.userId

    reply.send({ message: `User id ${userId} has been deleted!` })
  })
}
