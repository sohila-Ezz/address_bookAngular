import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from '../ViewModels/iperson';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private httpOptions;
  constructor(private HttpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      
      })
    }
   }
   getAllPersons():Observable<IPerson[]>{
    return this.HttpClient.get<IPerson[]>(`${environment.APIBaseURL}/Person`);
   }

   addPerson(person:IPerson){
    return this.HttpClient.post(`${environment.APIBaseURL}/Person`, JSON.stringify(person), this.httpOptions)
   }
   
}
