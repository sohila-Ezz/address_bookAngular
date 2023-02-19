import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';
import { JopService } from 'src/app/Services/jop.service';
import { PersonService } from 'src/app/Services/person.service';
import { IDepartment } from 'src/app/ViewModels/idepartment';
import { IJop } from 'src/app/ViewModels/ijop';
import { IPerson } from 'src/app/ViewModels/iperson';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent {

  newPerson: IPerson={} as IPerson;
  deptList: IDepartment[]=[];
  jobList: IJop[]=[];
  constructor(private deptServ:DepartmentService, private jobServ:JopService,private personServ:PersonService, private router:Router ) { 
  }
  ngOnInit(): void {
    this.deptServ.getAllDepartments().subscribe(deptList=>{
      this.deptList=deptList;
    })
    this.jobServ.getAllJobs().subscribe(jobList=>{
      this.jobList=jobList;
    })
  }
  onFileChange(event:any) {
  const reader = new FileReader();
    console.log(reader);
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newPerson.photo = reader.result as string;
      };
    }
  }
  selectedDept = {}
  getSelectedDept(e: any){
    console.log(e.target.value)
    console.log(this.selectedDept)
    console.log(this.newPerson)
  }
  savePerson()
  {
    console.log(this.newPerson);
    this.router.navigate(['Home']);

    this.personServ.addPerson(this.newPerson).subscribe(prs=>{
      console.log(prs)
      // this.router.navigate(['']);
     
    });
  }
}
