const express = require('express');
const port = 3001;
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'
    });
});

const server = app.listen(port, (e) => {
    if(e) return console.log(`Error: ${e}`);
    console.log(`Server listening on port ${server.address().port}`);
});