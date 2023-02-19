import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';
import { IDepartment } from 'src/app/ViewModels/idepartment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {

 DeptList:IDepartment[];
  constructor(private DeptServe:DepartmentService,privaterouter:Router ) {
    this.DeptList=[];
   }
   ngOnInit(): void {
    this.DeptServe.getAllDepartments().subscribe(data=>{
      console.log(data);
      this.DeptList=data;
     
    })
  }
}
