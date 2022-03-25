import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
  ) {}

  /**
   * @description OBTENER TODOS LOS EMPLEADOS
   * @author Andrew Mendoza
   * @returns Observable<any>
  */
   public get(): Observable<any[]>{
    return this.http.get<any>('assets/api/employee.json');
  }
}
