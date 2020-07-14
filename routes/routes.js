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

    // Add employee by POST
    app.post('/employees/add', (request, response) => {
        let employee = request.body;
        if(!employee) {
            return response.status(400).send({
                error: true,
                message: 'Employee not provided'
            });
        }
        dbConn.query("INSERT INTO employees(first_name, last_name, dob, role_title) VALUES(?,?,?,?);", 
        [employee.first_name, employee.last_name, employee.dob, employee.role_title], 
        (err, results, fields) => {
            if(err) throw err;
            return response.send({ data: results });
        });
    });

    // // Update employee by POST
    app.post('/employees/update/', (request, response) => {
        let employee = request.body;
        dbConn.query("UPDATE employees SET first_name = ?, last_name = ?, dob = ?, role_title = ? WHERE id = ?", 
        [employee.first_name, employee.last_name, employee.dob, employee.role_title, employee.id], 
        (err, results, fields) => {
            if(err) throw err;
            return response.send({ data: results });
        });
    });

    // Delete employee by DELETE
    app.post('/employees/delete/', (request, response) => {
        let uid = request.body.id;
        dbConn.query('DELETE FROM employees WHERE id = ?', [uid], (err, results, fields) => {
            if(err) throw err;
            return response.send({ data: results });
        });
    });

    // Get all performance reviews
    app.get('/reviews/', (request, response) => {
        dbConn.query('SELECT * FROM performance_reviews', (err, results, fields) => {
            if(err) throw err;
            return response.send({ data: results });
        });
    });

    // Get performance review by reviewers, reviewees
    app.get('/reviews/:id', (request, response) => {
        let id = request.params.id;
        dbConn.query('SELECT * FROM performance_reviews WHERE reviewer = ? OR reviewee = ?', [id, id], (err, results, fields) => {
            if(err) throw err;
            return response.send({ data: results });
        });
    });

    // Add performance review
    app.post('/reviews/add', (request, response) => {
        let review = request.body;
        dbConn.query('INSERT INTO performance_reviews(reviewer, reviewee, comments) VALUES (?,?,?);', [review.reviewer, review.reviewee, review.comments], (err, results, fields) => {
            if(err) throw err;
            return response.send({ data: results });
        });
    });

    // Update performance review
    app.post('/reviews/update', (request, response) => {
        let review = request.body;
        let timestamp = new Date().toISOString();
        dbConn.query('UPDATE performance_reviews SET comments = ?, updated = ? WHERE id = ?', [review.comments, timestamp, review.id], (err, results, fields) => {
            if(err) throw err;
            return response.send({ data: results });
        });
    });
}

module.exports = router;