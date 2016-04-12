const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);

  socket.on('data', (data) => {
    const writeToFile = fs.createWriteStream(__dirname + '/logs/log_' + Date.now() + '.txt')
    socket.pipe(writeToFile);
    socket.end('request complete');
  });
});

server.listen(3000, () => {
  process.stdout.write('server up on 3000\n')
});
