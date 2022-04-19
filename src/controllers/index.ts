import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async (fastify: FastifyInstance) => {

  fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'Hello wolrd!' })
  })

  fastify.get('/qrcode', (request: FastifyRequest, reply: FastifyReply) => {
    fastify.qrcode.toDataURL('https://fb.com/MyDevelMate', {
      margin: 2,
      color: {
        dark: "#c2185b",
        light: "#ffffff"
      }
    }, (error: any, base64String: any) => {
      if (error) {
        reply.code(500).send(error)
      } else {
        // console.log(base64String)
        const base64Image = base64String.split(';base64,').pop()
        const img = Buffer.from(base64Image, 'base64')
        reply.type('image/png')
        reply.send(img)
      }
    })
  })

  fastify.get('/jwt/sign', (request: FastifyRequest, reply: FastifyReply) => {
    const token = fastify.jwt.sign({ message: 'Fastify very fast!' })
    reply.send({ token })
  })

  fastify.get('/jwt/verify', {
    preValidation: [fastify.authenticate]
  }, (request: FastifyRequest, reply: FastifyReply) => {
    const decoded: any = request.user
    reply.send({ message: 'Protected area!', decoded })
  })

}
