import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from 'src/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviews: Review[];

  constructor(
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    // get all reviews on component init
    console.log('Review component init');
    this.reviewService.getReviews().subscribe( reviews => this.reviews = reviews.data );
  }

}
