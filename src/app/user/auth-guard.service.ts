import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isVerified = localStorage.getItem('isVerified');
        if (isVerified && isVerified == 'True') {
            return true;
        }
        else {
            return this.router.navigate(['/un-authorized']);
        }
    }
}