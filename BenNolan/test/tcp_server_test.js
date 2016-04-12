const chai = require('chai')
const expect = chai.expect;
const fs = require('fs');
const net = require('net');
const server = require(__dirname + '/../lib/server');

describe('Test tcp server', () => {

    it('Should recieve a response from server', function (done) {

        var client = net.connect({ port: 3000 },
            function() {
                client.write('Let\'s send this data!\n');
            });

        client.on('data', function(data) {
            expect(data.toString()).to.equal('request complete');
            client.end();
        });

        client.on('end', () => {
          console.log('disconnected from server!');
          done();
        });
    });

});
