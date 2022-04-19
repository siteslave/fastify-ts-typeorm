
import * as jsonwebtoken from 'jsonwebtoken';
import { AxiosInstance } from 'axios';
import { DataSource } from 'typeorm';

declare module 'fastify' {
  interface FastifyInstance {
    dataSource: DataSource
    jwt: jsonwebtoken
    authenticate: any
    axios: AxiosInstance | any
    qrcode: any
  }

  interface FastifyRequest {
    jwtVerify: any
    user: any
    file: any
    files: any[]
  }

}

