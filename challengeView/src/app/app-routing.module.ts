import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReviewComponent } from './review/review.component';
import { ReviewAddComponent } from './review-add/review-add.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'employees/add', component: EmployeeAddComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent},
  { path: 'reviews', component: ReviewComponent },
  { path: 'reviews/add', component: ReviewAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
