import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url: string = "";
  constructor(private http: HttpClient) 
  {
    this.url = "http://localhost:8080/employee";
  }
  
  // To print all data
  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  // To save data
  public save(empobj: Employee) 
  {
    return this.http.post<Employee>(this.url, empobj);
  }
}