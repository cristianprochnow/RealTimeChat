const express = require('express')
const http = require('http')
const cors = require('cors')
const socketio = require('socket.io')
const routes = require('./routes')

const app = express()

const server = http.createServer(app)

app.use(express.json())
app.use(routes)
app.use(cors())

const io = socketio(server)

const connections = []
const messages = []

io.on('connection', socket => {
  const connectionInformation = { id: socket.id }
  connections.push(connectionInformation)

  socket.emit('previousConnections', connections)
  socket.broadcast.emit('newConnection', connections)

  socket.emit('previousMessages', messages)

  socket.on('newMessage', messageData => {
    messages.push(messageData)

    socket.broadcast.emit('receivedMessage', messages)
  })

  socket.on('userDisconnected', disconnectionData => {
    const connectionIndex = connections.indexOf(disconnectionData.id)

    connections.splice(connectionIndex, 1)

    socket.broadcast.emit('userHaveBeenDisconnected', connections)
  })
})

server.listen(3333)
