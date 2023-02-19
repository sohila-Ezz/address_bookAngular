import { EmailValidator } from "@angular/forms";

export interface IRegister {
    firstName: string;
    lastName: string;
    username: string;
    email:EmailValidator;
    password: string;
}
