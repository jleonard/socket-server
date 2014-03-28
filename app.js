var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app);

app.listen(3001);

function handler (req, res) {
}

io.sockets.on('connection', function (socket) {
  socket.on('message', function (data) {
    socket.emit('message',data);
  });
});