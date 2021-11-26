import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
@Injectable({ providedIn: 'root' })

export class AuthAdminGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin && isAdmin == 'True') {
            return true;
        }
        else {
            return this.router.navigate(['/un-authorized']);
        }
    }
}