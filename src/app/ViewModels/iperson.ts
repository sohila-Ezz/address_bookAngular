import { EmailValidator } from "@angular/forms";

export interface IPerson {
  id:number;
  name: string;
  mobileNumber: string;
  dateOfBirth:Date;
  address: string;
  email:EmailValidator;
  password: string;
  photo: string;
  age:number;
  department_Id:number;
  job_Id:number;
}
