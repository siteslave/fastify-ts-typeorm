const io = require('socket.io-client');

const socket = io('http://localhost:8080?token=xxxxxxx', {
  path: '/socket.io'
});

const client = async () => {

  socket.on('connect', () => {
    console.log('connected')
  })

  socket.emit('chat message', 'Hello from client')

}

client()
