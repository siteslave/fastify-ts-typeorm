import fp from 'fastify-plugin'
import { DataSource } from "typeorm";

module.exports = fp(async (fastify: any, opts: any, done: any) => {

  try {
    const dataSource = new DataSource(opts);
    const connection = await dataSource.initialize()
    fastify.decorate("dataSource", connection);
    fastify.log.info("Database connected!")
    done();
  } catch (error) {
    done(error);
  }

})