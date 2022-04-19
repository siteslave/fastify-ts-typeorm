export default {
  querystring: {
    properties: {
      query: {
        type: 'string', minLength: 4,
      },
      by: {
        type: 'string',
        enum: ['username']
      }
    },
    required: [
      'query',
    ]
  }
}