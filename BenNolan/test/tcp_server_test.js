const chai = require('chai');
const expect = chai.expect;
const net = require('net');
const tcp = require(__dirname + '/../lib/server');

describe('Test tcp server', () => {
  it('Should recieve a response from server', (done) => {

    var client = net.connect({ port: 3000 },
            () => {
              client.write('Let\'s send this data!\n');
            });

    client.on('data', (data) => {
      expect(data.toString()).to.equal('request complete');
      client.end();
    });

    client.on('end', () => {
      console.log('disconnected from server!');
      done();
    });
  });
  after(() => {
    tcp.server.close();
  });
});
