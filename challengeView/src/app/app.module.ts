import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReviewComponent } from './review/review.component';
import { ReviewAddComponent } from './review-add/review-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    ReviewComponent,
    ReviewAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
