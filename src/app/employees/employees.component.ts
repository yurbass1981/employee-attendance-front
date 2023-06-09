import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';
import { EmployeesService } from '../services/employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  defaultPage = 1;
  defaultPageSize = 5;
  gridData: { data: Employee[]; total: number };

  columns: Array<{header: string, field: string}> = [
    {
      header: 'Name',
      field: 'name',
    },
    {
      header: 'Last Name',
      field: 'lastName',
    },
    {
      header: 'Age',
      field: 'age',
    },
    {
      header: 'Hire Date',
      field: 'hireDate',
    },
  ];

  // paging: GuiPaging = {
  //   enabled: true,
  //   page: this.defaultPage,
  //   pageSize: this.defaultPageSize,
  //   pageSizes: [5, 10, 20],
  //   pagerBottom: true
  // };

  constructor(private employeesService: EmployeesService) {
    this.gridData = { data: [], total: 0 };
  }

  ngOnInit(): void {
    this.employeesService
      .getEmployees(this.defaultPage, this.defaultPageSize)
      .subscribe((response) => {
        console.log('response: ', response);
        this.gridData = response;
      });

      console.log('123');
  }
}
