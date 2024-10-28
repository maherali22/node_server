// Import the built-in HTTP module
const http = require('http');

// Define a port to listen to
const port = 3001;

// Create the server
const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader('Content-Type', 'text/plain');

  // Handle requests based on the URL path
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello, world! Welcome to my Node.js server!');
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end('This is the About page.');
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
