import * as crypto from 'crypto'

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async (fastify: FastifyInstance) => {

  // const userModel = new UserModel()

  // fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const body: any = request.body

  //   const firstName = body.firstName
  //   const lastName = body.lastName

  //   const username = body.username
  //   const password = body.password

  //   const encPassword = crypto.createHash('md5').update(password).digest('hex')
  //   try {
  //     const data: any = {}
  //     data.first_name = firstName
  //     data.last_name = lastName
  //     data.username = username
  //     data.password = encPassword

  //     await userModel.create(db, data)

  //     reply.send(data)
  //   } catch (error: any) {
  //     reply.send({ message: error.message })
  //   }
  // })

  // fastify.get('/', {
  //   preValidation: [fastify.authenticate]
  // }, async (request: FastifyRequest, reply: FastifyReply) => {
  //   try {
  //     const rs: any = await userModel.read(db)

  //     reply.send(rs)
  //   } catch (error: any) {
  //     reply.send({ message: error.message })
  //   }
  // })

  // // /search?q=xxxx
  // fastify.get('/search', async (request: FastifyRequest, reply: FastifyReply) => {

  //   const query: any = request.query
  //   const _query = query.q

  //   try {
  //     const rs: any = await userModel.search(db, _query)

  //     reply.send(rs)
  //   } catch (error: any) {
  //     reply.send({ message: error.message })
  //   }
  // })

  // fastify.put('/:userId/edit', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const body: any = request.body
  //   const params: any = request.params

  //   const firstName = body.firstName
  //   const lastName = body.lastName

  //   const userId = params.userId

  //   try {
  //     const data: any = {}
  //     data.first_name = firstName
  //     data.last_name = lastName

  //     await userModel.update(db, userId, data)

  //     reply.send(data)
  //   } catch (error: any) {
  //     reply.send({ message: error.message })
  //   }
  // })

  // fastify.put('/:userId/password', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const body: any = request.body
  //   const params: any = request.params

  //   const password = body.password

  //   const userId = params.userId

  //   try {
  //     const encPassword = crypto.createHash('md5').update(password).digest('hex')
  //     const data: any = {}
  //     data.password = encPassword

  //     await userModel.update(db, userId, data)

  //     reply.send({ ok: true })
  //   } catch (error: any) {
  //     reply.send({ message: error.message })
  //   }
  // })

  // fastify.delete('/:userId', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const params: any = request.params
  //   const userId = params.userId

  //   try {
  //     await userModel.remove(db, userId)

  //     reply.send({ ok: true })
  //   } catch (error: any) {
  //     reply.send({ message: error.message })
  //   }
  // })

}
