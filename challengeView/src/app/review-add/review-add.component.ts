import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from 'src/Review';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit {

  review: Review = {
    reviewer: 0,
    reviewee: 0,
  };

  constructor(
    private reviewService: ReviewService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.review);
    this.reviewService.addReview(this.review).subscribe( result => this.location.back());
  }
}
