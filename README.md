# How to run

This project is using a hosted MySQL database on Heroku using a NodeJS backend with Angular 10 as the frontend. 

To run this project, access to the database is required through a configuration file (config.js) with database details (provided on request). Place this file in the same directory as app.js.
To run the node server, run "node app.js" in the console of your choice in the root directory of this project. This API is set to run on http://localhost:3001. You can change the port in app.js on line 2.
To run the frontend, [make sure Angular 10 Cli is installed](https://angular.io/guide/setup-local#install-the-angular-cli) then run the command "ng serve --open" which will open a browser to http://localhost:4200.

# About

This project is definitely a WIP. There is a TODO at the bottom of this README. Currently, you can perform CRUD on employees and CRU on reviews (as outlined by the challenge).

To interact with employees, navigate to http://localhost:4200/employees.
To simulate an admin assigning a review process, navigate to http://localhost:4200/reviews.

# Full Stack Developer Challenge
This is an interview challengs. Please feel free to fork. Pull Requests will be ignored.

## Requirements
Design a web application that allows employees to submit feedback toward each other's performance review.

*Partial solutions are acceptable.*  It is not necessary to submit a complete solution that implements every requirement.

### Admin view
* Add/remove/update/view employees
* Add/update/view performance reviews
* Assign employees to participate in another employee's performance review

### Employee view
* List of performance reviews requiring feedback
* Submit feedback

## Challenge Scope
* High level description of design and technologies used
* Server side API (using a programming language and/or framework of your choice)
  * Implementation of at least 3 API calls
  * Most full stack web developers at PayPay currently use Java, Ruby on Rails, or Node.js on the server(with MySQL for the database), but feel free to use other tech if you prefer
* Web app
  * Implementation of 2-5 web pages using a modern web framework (e.g. React or Angular) that talks to server side
    * This should integrate with your API, but it's fine to use static responses for some of it 
* Document all assumptions made
* Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge
* Fork this repo in github
* Complete the design and code as defined to the best of your abilities
* Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the PayPay interview team
* Complete your work in your own github repo and send the results to us and/or present them during your interview

## What are we looking for? What does this prove?
* Assumptions you make given limited requirements
* Technology and design choices
* Identify areas of your strengths

## TODO

### Frontend

* Admin view
* Sessions for employee / admin
* styling
