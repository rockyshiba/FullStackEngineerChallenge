import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:3001';

  constructor(
    private http: HttpClient
  ) { }

  // Get all employees
  // result: { data: [employee] }
  getEmployees(): Observable<any> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  // Get employee by id
  // result: { data: employee }
  getEmployee(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.url}/employees/${id}`);
  }

  // Add employee
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(`${this.url}/employees/add`, { ...employee });
  }

  // Update employee
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(`${this.url}/employees/update/`, { ...employee });
  }

  // Delete employee
  deleteEmployee(id: number): Observable<any> {
    return this.http.post<any>(`${this.url}/employees/delete/`, { id });
  }
}
