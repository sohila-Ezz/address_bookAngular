import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILogin } from '../ViewModels/ilogin';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions;
  constructor(private Router:Router,private HttpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      
      })
   }
}
Login(newLogin:ILogin ):Observable<ILogin>{
  return this.HttpClient.post<ILogin>(`${environment.APIBaseURL}/Auth/register`,newLogin);
}
}
