import * as crypto from 'crypto'

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export default async (fastify: FastifyInstance) => {

  const userRepository = new UserRepository(fastify.dataSource);

  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password

    try {
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const user: UserEntity = await userRepository.login(username, encPassword)

      if (user) {
        const payload: any = {
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName
        }

        const token = fastify.jwt.sign(payload)
        reply.send({ token })
      } else {
        reply.status(401).send({ ok: false, code: 401, error: 'ชื่อผู้ใช้งานหรือรหัสผ่าน ไม่ถูกต้อง' })
      }

    } catch (error: any) {
      reply.status(500).send({ ok: false, code: 500, error: error.message })
    }
  })

}
