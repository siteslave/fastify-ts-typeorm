export default {
  body: {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      sex: {
        type: 'string',
        enum: ['M', 'W']
      }
    },
    required: [
      'firstName',
      'lastName',
      'sex'
    ]
  }
}