import { Component, OnInit } from '@angular/core';
import { EmployyesService } from '../services/employyes.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string;
  employeesService: EmployyesService;

  constructor(employeesService: EmployyesService) {
    this.title = 'Employees component';
    this.employeesService = employeesService;
  }
  
  ngOnInit(): void {}
}
