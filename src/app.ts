import * as fastify from 'fastify'
import routers from './router'
import { join } from 'path'
import { UserEntity } from './entities/user.entity'

const multer = require('fastify-multer')

require('dotenv').config({ path: join(__dirname, '../config.conf') })

const app: fastify.FastifyInstance = fastify.fastify({
  logger: { level: 'info' }
})

app.register(multer.contentParser)
app.register(require('fastify-formbody'))
app.register(require('fastify-cors'), {})

app.register(require('./plugins/db'), {
  type: "mysql",
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test',
  entities: [UserEntity],
  synchronize: false,
  logging: true,
  pool: {
    min: Number(process.env.DB_MIN_CONNECTION) || 1,
    max: Number(process.env.DB_MAX_CONNECTION) || 100
  },
})

app.register(require('./plugins/jwt'), {
  secret: process.env.SECRET_KEY || '@1234567890@'
})

// Axios
app.register(require('fastify-axios'), {
  clients: {
    v1: {
      baseURL: 'https://apingweb.com/api/rest',
    },
    v2: {
      baseURL: 'https://randomuser.me/api'
    }
  }
})

// QR Code
app.register(require('@chonla/fastify-qrcode'))

app.ready(err => {
  if (err) throw err
})

app.register(routers)

export default app;