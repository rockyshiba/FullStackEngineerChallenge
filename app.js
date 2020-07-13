const express = require('express');
const { response } = require('express');
const port = 3001;
const app = express();

app.get('/', (req, res) => {
    console.log(`URL: ${req.url}`);
    res.send('Hello, Server!');
});

const server = app.listen(port, (e) => {
    if(e) return console.log(`Error: ${e}`);
    console.log(`Server listening on port ${server.address().port}`);
});