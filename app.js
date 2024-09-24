const http = require('http');

// Create a server that listens on port 4000
const server = http.createServer((req, res) => {
  // Log the name in the console
  console.log('Nethravathi B S');
});

// Server listens on port 4000
server.listen(4000);
