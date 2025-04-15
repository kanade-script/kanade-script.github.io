const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let waitingPeer = null;

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('find-partner', () => {
    if (waitingPeer && waitingPeer !== socket.id) {
      // Нашли пару
      socket.to(waitingPeer).emit('partner-found', socket.id);
      socket.emit('partner-found', waitingPeer);
      waitingPeer = null;
    } else {
      // Ожидаем второго участника
      waitingPeer = socket.id;
      socket.emit('waiting');
    }
  });

  socket.on('disconnect', () => {
    if (waitingPeer === socket.id) {
      waitingPeer = null;
    }
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
