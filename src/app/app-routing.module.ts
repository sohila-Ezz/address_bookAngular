import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './Components/add-person/add-person.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';

const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:"Register",component:RegisterationComponent},
  {path:'Home',component:HomeComponent},
  {path:"AddPerson",component:AddPersonComponent},
 {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
