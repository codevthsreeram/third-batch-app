import { Component, OnInit } from "@angular/core";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    title: string = 'Add User';
    alertMessage: string;
    userModel = new UserModel();
    lstUserDetails: UserModel[];
    constructor(private userService: UserService) {

    }
    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.lstUserDetails = this.userService.getAll();
    }
    addUser() {
        this.userModel = new UserModel();
        this.alertMessage = '';
        this.title = 'Add User';
    }
    editUser(userModel: UserModel) {
        this.userModel = userModel;
        this.alertMessage = '';
        this.title = 'Edit User';
    }
    deleteUser(id: number) {
        if (confirm("Are you sure to delete ?")) {
            this.userService.delete(id);
        }
        //this.loadData();
    }
    saveUser() {
        if (this.userModel.id) {
            this.userService.update(this.userModel.id, this.userModel);
            this.alertMessage = 'User updated successfully...!';
        }
        else {
            this.userService.create(this.userModel);
            this.alertMessage = 'User created successfully...!';
        }
        this.userModel = new UserModel();
        //this.loadData();
    }
}