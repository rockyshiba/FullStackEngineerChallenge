import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  // default dummy data
  employee: Employee = {
    id: 1,
    first_name: '',
    last_name: '',
    dob: new Date(1, 1, 1900),
    // department: 1,
    role_title: 'Accountant'
  };

  constructor(
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  // When user clicks submit
  onSubmit(): void {
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe(data => console.log(data));
    this.location.back();
  }
}
