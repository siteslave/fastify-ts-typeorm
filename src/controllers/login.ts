import * as crypto from 'crypto'

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async (fastify: FastifyInstance) => {

  // const db: Knex = fastify.knex
  // const loginModel = new LoginModel()

  // fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const body: any = request.body
  //   const username = body.username
  //   const password = body.password

  //   try {
  //     const encPassword = crypto.createHash('md5').update(password).digest('hex')
  //     const rs: any = await loginModel.login(db, username, encPassword)

  //     if (rs.length > 0) {
  //       const user: any = rs[0]
  //       const payload: any = {
  //         userId: user.user_id,
  //         firstName: user.first_name,
  //         lastName: user.last_name
  //       }

  //       const token = fastify.jwt.sign(payload)
  //       reply.send({ token })
  //     } else {
  //       reply.status(401).send({ ok: false, message: 'Login failed' })
  //     }


  //   } catch (error: any) {
  //     reply.status(500).send({ message: error.message })
  //   }
  // })

}
