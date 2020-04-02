const express = require('express');
const http = require('http');
const cors = require('cors');
const socketio = require('socket.io');
const routes = require('./routes');

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(routes);
app.use(cors());

const io = socketio(server);

io.on('connection', socket => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on('testing', data => console.log(data.message));
});

server.listen(3333);
