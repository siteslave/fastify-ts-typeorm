export default {
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string', minLength: 4,
      },
      password: { type: 'string', minLength: 8 },
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      sex: {
        type: 'string',
        enum: ['M', 'W']
      }
    },
    required: [
      'username',
      'password',
      'sex'
    ]
  }
}