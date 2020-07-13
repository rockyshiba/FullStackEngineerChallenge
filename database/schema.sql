-- MySQL 5.7.23

-- Tables
-- Departments
CREATE TABLE departments (
    id SMALLINT(6) NOT NULL PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    dept_desc VARCHAR(100)
);
-- dummy data
INSERT INTO 
departments VALUES
(1, 'Accounting', 'Accounting department'), 
(2, 'Engineering', 'Engineering department');

-- Employees
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    dob DATE,
    department SMALLINT(6),
    role_title VARCHAR,
    PRIMARY KEY (id)
);
-- dummy data
INSERT INTO employees (first_name, last_name, dob, department, role_title) 
VALUES 
('John', 'Doe', '1980-01-01', 1, 'Accountant'), -- id: 1
('Jane', 'Doe', '1990-01-01', 1, 'Accountant'), -- id: 2
('Rocky', 'Hashimoto', '1990-12-31', 2, 'Database Engineer'), -- id: 3
('Min', 'Ho', '1990-11-11', 2, 'Frontend Engineer'); -- id: 4


-- Performance Reviews
CREATE TABLE performance_reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    reviewer INT(11) NOT NULL,
    reviewee INT(11) NOT NULL,
    comments VARCHAR(225) NOT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated DATETIME,
    INDEX(reviewer),
    FOREIGN KEY(reviewer) REFERENCES employees(id),
    INDEX(reviewee),
    FOREIGN KEY(reviewee) REFERENCES employees(id)
);