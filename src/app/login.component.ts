import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserValidators } from "./user.validators";
import { AuthModel } from "./user/auth.model";
import { AuthService } from "./user/auth.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private authService: AuthService, private toastrService: ToastrService) {
    }
    authModel = new AuthModel();
    loginForm = new FormGroup(
        {
            userName: new FormControl('', [Validators.required, Validators.minLength(5), UserValidators.cannotContainSpace]),
            password: new FormControl('', Validators.required)
        }
    )
    get userName() {
        return this.loginForm.get('userName');
    }
    get password() {
        return this.loginForm.get('password');
    }
    login() {
        let isVerified: boolean = this.authService.verifyCredetials(this.authModel);

        if (isVerified) {
            localStorage.setItem('isVerified', 'True');
            let isAdmin: boolean = this.authService.checkAdmin(this.authModel.userName);
            if (isAdmin) {
                localStorage.setItem('isAdmin', 'True');
            }
            this.toastrService.success('Login successful...');
        }
        else {
            this.toastrService.warning('Invalid credentials...');
        }
    }
}