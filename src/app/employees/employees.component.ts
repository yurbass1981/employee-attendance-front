import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string;
  employeesService: EmployeesService;

  constructor(employeesService: EmployeesService) {
    this.title = 'Employees component';
    this.employeesService = employeesService;
  }

  ngOnInit(): void {}
}
