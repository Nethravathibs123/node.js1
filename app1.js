const http = require('http');

const server = http.createServer((req, res) => {
    // Set the content type for the response
    res.setHeader( 'Content-Type',  'text/plain' );

    // Check the URL and respond accordingly
    if (req.url === '/home') {
        res.write('Welcome home');
    } else if (req.url === '/about') {
        res.write('Welcome to About Us page');
    } else if (req.url === '/node') {
        res.write('Welcome to my Node Js project');
    } else {
        res.write('404 Not Found'); // Handle unknown URLs
    }

    // End the response
    res.end();
});

// Set the server to listen on port 3000
server.listen(4000);
