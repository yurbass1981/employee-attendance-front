import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';
import { EmployeesService } from '../services/employees.service';
import { GuiColumn, GuiDataType, GuiPaging, GuiPagingDisplay } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

  defaultPage = 1;
  defaultPageSize = 5;

  employees: Employee[];

  columns: Array<GuiColumn> = [
    {
      header: 'Name',
      field: 'name'
    },
    {
      header: 'Last Name',
      field: 'lastName'
    },
    {
      header: 'Age',
      field: 'age'
    },
    {
      header: 'Hire Date',
      field: 'hireDate'
    }
  ];

  paging: GuiPaging = {
		enabled: true,
		page: this.defaultPage,
		pageSize: this.defaultPageSize,
		pageSizes: [5, 10, 20],
		pagerBottom: true
	};

  constructor(private employeesService: EmployeesService) {
    this.employees = [];
  }

  ngOnInit(): void {
    this.employeesService.getEmployees(this.defaultPage, this.defaultPageSize).subscribe((response) => {
      console.log('Subscribe Employee: ', response);
      this.employees = response;
    });

    console.log('Employee: ', this.employees);
  }
}
