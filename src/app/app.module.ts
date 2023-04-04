import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { GuiGridModule } from '@generic-ui/ngx-grid';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GuiGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
