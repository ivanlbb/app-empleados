import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private cookieService: CookieService) {}

  token: string;

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      firebase.auth().currentUser?.getIdToken().then(
        token => {          
          this.token = token;
          this.cookieService.set("token", this.token);
          this.router.navigate(['/']);
        }
      )
      // Signed in
      // var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error.message)
      // var errorCode = error.code;
      // var errorMessage = error.message;
    });        
  }

  getIdToken(){
    //return this.token;
    return this.cookieService.get("token");
  }

  estaLogueado(){
    // console.log(this.token);
    // return this.token;
    return this.getIdToken();
  }

  logout(){
    firebase.auth().signOut().then(
      ()=>{
        this.token = "";
        this.cookieService.set("token", this.token);
        this.router.navigate(['/']);
        window.location.reload();
      }
    );
  }
}
