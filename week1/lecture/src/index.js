'use strict';

const {
  createServer
} = require('./server');

const PORT = 80;

createServer().listen(PORT, function () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});