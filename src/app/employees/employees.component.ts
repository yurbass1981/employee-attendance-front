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
  employees: Employee[] | null;

  constructor(private employeesService: EmployeesService) {
    this.title = 'Employees component';
    this.employees = null;
  }

  ngOnInit(): void {
    this.employeesService.getEmployees()
    .subscribe((response) => {
      console.log('Subscribe Employee: ', response);
      this.employees = response;
    });

    console.log('Employee: ', this.employees);
  }
}
