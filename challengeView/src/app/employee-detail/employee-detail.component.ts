import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/Employee';
import { Location } from '@angular/common';
import { ReviewService } from '../review.service';
import { Review } from 'src/Review';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
  employee: Employee;
  message: string;
  status = 'Update';
  reviews: Review[];
  reviewer: Review[] = []; // reviewers where employee is reviewer
  reviewee: Review[] = []; // reviewers where employee is reviewee

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private reviewService: ReviewService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.reviews = [];
      this.reviewer = [];
      this.reviewee = [];
      this.id = +params.get('id');
      // get employees
      this.employeeService.getEmployee(this.id).subscribe(employee => {
        console.log(employee);
        this.employee = employee.data;

        // get reviews
        this.reviewService.getReview(this.id).subscribe(reviews => {
          console.log(reviews);
          this.reviews = reviews.data;
          // sort reviews into reviewer, reviewee
          this.reviews.forEach(r => {
            if (r.reviewer === this.employee.id){
              this.reviewer.push(r);
            } else {
              this.reviewee.push(r);
            }
          });
        });
      });
    });
  }

  onUpdate(): void {
    // TODO: return message from api
    this.status = 'Updating...';
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      this.message = 'Update successful';
      this.status = 'Update';
    });
  }

  onReviewUpdate(review: Review): void {
    this.reviewService.updateReview(review).subscribe(data => {
      this.message = `Review: ${review.id} updated`;
    });
  }

  goBack(): void {
    this.location.back();
  }

  onDelete(id: number): void {
    // delete employee
    this.employeeService.deleteEmployee(id).subscribe( results => {
      this.message = `Employee:${id} was deleted`;
    });
    this.goBack();
  }
}
