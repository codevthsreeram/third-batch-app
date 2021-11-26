import { UserModel } from "./user.model";

export class UserService {
    lstUsers: UserModel[] = [
        { id: 1, name: 'Sreeram Kondagorla', email: 'sreeram@gmail.com', mobileNumber: 7799667565 },
        { id: 2, name: 'Ram Kondagorla', email: 'ram@gmail.com', mobileNumber: 949494949 },
        { id: 3, name: 'Vishnu Jadi', email: 'vishnu@gmail.com', mobileNumber: 7887878787 }
    ];

    getAll(): UserModel[] {
        return this.lstUsers;
    }
    getById(id: number): UserModel {
        let index = this.lstUsers.findIndex(x => x.id == id);
        return this.lstUsers[index];
    }
    create(userModel: UserModel) {
        userModel.id = this.lstUsers.length + 1;
        this.lstUsers.push(userModel);
    }
    update(id: number, userModel: UserModel) {
        let index = this.lstUsers.findIndex(x => x.id == id);
        this.lstUsers[index] = userModel;
    }
    delete(id: number) {
        let index = this.lstUsers.findIndex(x => x.id == id);
        this.lstUsers.splice(index, 1);
    }
}