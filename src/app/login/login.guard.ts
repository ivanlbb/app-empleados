import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../login.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})  
export class LoginGuardian implements CanActivate{

    constructor (private loginService: LoginService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.loginService.estaLogueado()){
            return true;
        }else {
            this.router.navigate(['/login'])
            return false;
        }
    }
    
}