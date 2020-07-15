import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Review } from '../Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url = 'http://localhost:3001';

  constructor(
    private http: HttpClient
  ) { }

  getReviews(): Observable<any>{
    return this.http.get<any>(`${this.url}/reviews/`);
  }

  getReview(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/reviews/${id}`);
  }

  addReview(review: Review): Observable<any>{
    review.reviewee = Number(review.reviewee);
    review.reviewer = Number(review.reviewer);
    return this.http.post<any>(`${this.url}/reviews/add`, { ...review });
  }
}
