import { Component } from '@angular/core';
import { PersonService } from 'src/app/Services/person.service';
import { IPerson } from 'src/app/ViewModels/iperson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
PersonList:IPerson[];
constructor(private personserv:PersonService){
this.PersonList=[];
}
ngOnInit(): void {
  this.personserv.getAllPersons().subscribe(data=>{
    console.log(data);
    this.PersonList=data;
   
  })
}
DeletePerson(Id:number){

}
}
