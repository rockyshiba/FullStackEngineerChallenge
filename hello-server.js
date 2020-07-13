const http = require('http');
const { on } = require('process');
const { response } = require('express');
const port = 3001;
const server = http.createServer();

// server**on('request'** (request, response) => {
//     console.log(`URL: ${request.url}`);
//     response.end('Hello, server!')
// });

server.listen(port, (err) => {
    if(err) return console.log(`Error: ${err}`);
    console.log(`Server is listening on port ${port}`);
});