import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  message: string;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe( results => {
        this.employees = results.data;
        console.log(this.employees);
      });
  }

  onDelete(id: number): void {
    // delete employee
    this.employeeService.deleteEmployee(id).subscribe( results => {
      this.message = `Employee:${id} was deleted`;
    });
    // refresh employee list
    this.employeeService.getEmployees().subscribe( results => this.employees = results.data );
  }
}
