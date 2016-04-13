const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
    const wToFile = fs.createWriteStream(__dirname + '/logs/log_' + Date.now() + '.txt');
    socket.pipe(wToFile);
      socket.end('request complete\n');
    });

server.listen(3000, () => {
  process.stdout.write('server up on 3000\n');
});

exports.server = server;
