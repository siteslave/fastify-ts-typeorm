import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { v4 as uuidv4 } from 'uuid'

import multer from 'fastify-multer'
const mime = require('mime-types')

import * as fse from 'fs-extra'
import * as path from 'path'
import * as fs from 'fs'


export default async (fastify: FastifyInstance) => {

  const uploadDir = process.env.UPLOAD_DIR || './uploads'

  // document : http://expressjs.com/en/resources/middleware/multer.html

  var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
      cb(null, uploadDir)
    },
    filename: function (req: any, file: any, cb: any) {
      const _ext = path.extname(file.originalname)
      const fileName = `${uuidv4()}${_ext}`
      cb(null, fileName)
    }
  })

  const upload = multer({
    storage,
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
    fileFilter: (req: any, file: any, cb: any) => {
      if (file.mimetype !== 'image/png') {
        return cb(new Error('Invalid mimetype'), false)
      }
      cb(null, true)
    }
  })

  fse.ensureDirSync(uploadDir)

  fastify.post('/', {
    preHandler: upload.single('file')
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const file = request.file
      reply.send({ file })
    } catch (error: any) {
      console.log(error)
      reply.code(500).send({ statusCode: 500, error: error.message })
    }
  })

  fastify.post('/bulk', {
    preHandler: upload.array('file', 3)
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const files = request.files
      reply.send({ files })
    } catch (error: any) {
      console.log(error)
      reply.code(500).send({ statusCode: 500, error: error.message })
    }
  })

  fastify.get('/:fileName', (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    const fileName = params.fileName
    const filePath = path.join(uploadDir, fileName)

    try {
      if (fs.existsSync(filePath)) {
        const mimeType = mime.lookup(fileName)
        const fileData = fs.readFileSync(filePath)
        reply.type(mimeType)
        reply.send(fileData)
      } else {
        reply.code(400).send({
          statusCode: 404,
          error: 'File not found'
        })
      }
    } catch (error: any) {
      reply.code(500).send({ statusCode: 500, error: error.message })
    }
  })
}
