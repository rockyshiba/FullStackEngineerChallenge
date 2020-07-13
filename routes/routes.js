const mysql = require('mysql');
const config = require('../config');

let dbConn = mysql.createConnection({
    host: config.development.db.host,
    user: config.development.db.user,
    password: config.development.db.password,
    database: config.development.db.database
});

dbConn.connect();

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    // Get all employees
    app.get('/employees', (request, response) => {
        dbConn.query('SELECT * FROM employees', (err, results, fields) => {
            if(err) throw err;
            return response.send({data: results});
        });
    });
}

module.exports = router;