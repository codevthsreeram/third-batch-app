import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserValidators } from "./user.validators";

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html'
})

export class SignUpComponent {
    constructor(private router: Router) {

    }
    signupForm = new FormGroup(
        {
            emailAddress: new FormControl('', [Validators.required, UserValidators.cannotContainSpace, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')], UserValidators.shouldBeUnique),
            password: new FormControl('', Validators.required)
        }
    )
    get emailAddress() {
        return this.signupForm.get('emailAddress');
    }
    get password() {
        return this.signupForm.get('password');
    }

    log(x) { console.log(x); }

    register() {
        //registration logic....
        this.router.navigate(['/login']);
    }
}