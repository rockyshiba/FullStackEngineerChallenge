var supertest = require('supertest');
var should = require('should');

var server = supertest.agent("http://localhost:3001");

describe("Employees", function() {
    this.timeout(60000);
    it("should return all employees at /employees", (done) => {
        server.get('/employees')
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });

    it("should add an employee at /employees/add", (done) => {
        server.post('/employees/add')
        .send({
            first_name: 'Rocky', 
            last_name: 'Shiba', 
            dob: '2010-04-01', 
            department: 2, 
            role_title: 'Engineer'})
        .expect("Content-type", /json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });

    it("should update an employee at /employees/update/", (done) => {
        server.post('/employees/update/')
        .send({
            id: 3,
            first_name: 'Rocky',
            last_name: 'Shibe',
            dob: '2010-04-01',
            department: 1,
            role_title: 'Accountant'
        })
        .expect("Content-type", /json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });

    it("should delete an employee at /employees/delete/", (done) => {
        server.delete('/employees/delete/')
        .send({
            id: 4
        })
        .expect("Content-type", /json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });
});