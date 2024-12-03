import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAGx4qHmGX-Z8nuBeYORupeLTt4PhWGhnk",
      authDomain: "mis-clientes-e9e04.firebaseapp.com",      
    })
  }
  
  estaLogueado(){
    return this.loginService.estaLogueado();
  }
  
  logout(){
    return this.loginService.logout();
  }
}
