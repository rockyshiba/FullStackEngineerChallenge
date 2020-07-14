import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/Employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  message: string;
  status = 'Update';

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(employee => {
      console.log(employee);
      this.employee = employee.data;
    });
  }

  onUpdate(): void {
    // TODO: return message from api
    console.log(this.employee);
    this.status = 'Updating...';
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      this.message = 'Update successful';
      this.status = 'Update';
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
