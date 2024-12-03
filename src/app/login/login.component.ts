import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService){}
    // email: string;
    // password: string;

    login(form: NgForm) {      
      const email = form.value.email;
      const password = form.value.password;      
      console.log(email+"/"+password)
      this.loginService.login(email, password);
    }
      
}
