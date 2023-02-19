import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { ILogin } from 'src/app/ViewModels/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
newLogin:ILogin={}as ILogin;
constructor(private LoginServe:LoginService,private router:Router){

}
Login(){
  console.log(this.newLogin);

  this.LoginServe.Login(this.newLogin).subscribe(reg=>{
   this.router.navigate(['/Home']);
    
  });
}
}
