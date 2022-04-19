export default {
  type: 'object',
  headers: {
    properties: {
      'x-fastify-token': {
        type: 'string'
      }
    },
    required: [
      'x-fastify-token',
    ]
  }
}