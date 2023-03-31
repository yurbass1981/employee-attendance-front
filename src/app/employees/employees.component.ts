import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string;
  employee: Employee;

  constructor(private employeesService: EmployeesService) {
    this.title = 'Employees component';
    this.employee = null;
  }

  ngOnInit(): void {
    this.employeesService.getEmployees()
    .subscribe(response => {
      this.employee = response;
    })

    console.log('Employee: ', this.employee);
  }
}
