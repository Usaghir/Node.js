'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  const stateCode = 10;

  const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    switch (req.url) {
      case '/state':
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ state: stateCode }));
        break;
      case '/add':
        let addState = stateCode;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ state: addState++ }));
        break;
      case '/subtract':
        let subState = stateCode;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ state: subState-- }));
        break;
      case '/reset':
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ state: stateCode }));
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
  });
  return server;
}

module.exports = {
  createServer
};
