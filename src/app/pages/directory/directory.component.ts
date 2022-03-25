import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  List_Employee: any = []; //LISTA DE EMPLEADOS
  searchValue: any; // VARIABLE PARA FILTER

  constructor(
    private ServEmployee : EmployeeService
  ) { }

  ngOnInit(): void {
    this.ServEmployee.get().subscribe(res => {
      this.List_Employee = res;
      console.log(this.List_Employee);
    },err =>{
      console.log(err);
    });
  }

}
