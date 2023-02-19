import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IJop } from '../ViewModels/ijop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JopService {

  private httpOptions;
  constructor(private Router:Router, private HttpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      
      })

  }
   }
   getAllJobs():Observable<IJop[]>{
    return this.HttpClient.get<IJop[]>(`${environment.APIBaseURL}/Jobs`);
   }
}
