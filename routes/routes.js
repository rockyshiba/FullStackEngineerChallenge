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

    // Get employee by id
    app.get('/employees/:id', (request, response) => {
        let uid = request.params.id;
        if(!uid) {
            return response.status(400).send({
                error: true,
                message: 'User id not provided'
            });
        }
        dbConn.query('SELECT * FROM employees WHERE id=?', uid, (err, results, fields) => {
            if(err) throw err;
            return response.send({
                data: results[0]
            });
        });
    });
}

module.exports = router;