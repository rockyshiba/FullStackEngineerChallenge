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

describe("performance reviews", function(){
    it("should query all performance reviews", (done) => {
        server.get('/reviews/')
        .expect('Content-type',/json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });

    it("should query reviews by reviewer id or reviewee id", (done) => {
        server.get('/reviews/2')
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });

    it("should add a performance review", (done) => {
        server.post('/reviews/add')
        .send({
            reviewer: 1,
            reviewee: 2,
            comments: "Great teamwork!"
        })
        .expect('Content-type',/json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });

    it("should update a performance review by id", (done) => {
        server.post('/reviews/update')
        .send({
            id: 1,
            comments: "Teamwork no good!"
        })
        .expect('Content-type',/json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });
});