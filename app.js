const express = require('express');
const port = 3001;
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port, (e) => {
    if(e) return console.log(`Error: ${e}`);
    console.log(`Server listening on port ${server.address().port}`);
});