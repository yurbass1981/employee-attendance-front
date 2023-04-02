import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from '../models/employee-model';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:5055/api/Employee');
  }

  getEmployeeById(id: string | number) {
    return this.http.get('http://localhost:5055/api/Employee', {
      params: new HttpParams().set('id', id)
    })
  }

  deleteEmployeeById(id: string | number) {
    return this.http.delete('http://localhost:5055/api/Employee', {
      params: new HttpParams().set('id', id)
    })
  }
}
