import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';
import { IRegister } from 'src/app/ViewModels/iregister';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent {
newRegister:IRegister={}as IRegister;
error = this.initError();
customMsg = ''
constructor(private RegsterServe:RegisterService,private router:Router){

}

isError(){
  return this.error?.FirstName || this.error?.LastName 
    || this.error?.Password || this.error?.Username || this.error?.Email 
    || this.customMsg
}
initError(){
  return {FirstName:[], LastName:[], Password:[],Username:[],Email:[]};
}
  Register()
  {
   console.log(this.newRegister);

this.RegsterServe.Register(this.newRegister).subscribe(res=>{
  this.router.navigate(['/Home']);
  if(res && !res.messages){

  }
  
}, err => {
  if(err?.error?.errors)
    this.error = err.error.errors
  else{
    this.error = this.initError();
    this.customMsg = err;
  }
});
  }
}
