import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IDepartment } from '../ViewModels/idepartment';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private httpOptions;
  constructor(private Router:Router, private HttpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      
      })

  }
   }
   getAllDepartments():Observable<IDepartment[]>{
    return this.HttpClient.get<IDepartment[]>(`${environment.APIBaseURL}/Department`);
   }
   
}
