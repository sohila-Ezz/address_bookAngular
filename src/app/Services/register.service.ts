import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IRegister } from '../ViewModels/iregister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private httpOptions;
  constructor( private Router:Router,private HttpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      
      })

   }
  }
  Register(newRegister:IRegister ):Observable<any>{
    return this.HttpClient.post<IRegister>(`${environment.APIBaseURL}/Auth/register`,newRegister);
  }
}
