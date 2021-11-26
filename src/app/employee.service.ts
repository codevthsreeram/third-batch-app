import { Employee } from "./employee";

export class EmployeeService {
    lstEmployee: Employee[] = [
        { id: 1, name: 'Sreeram Kondagorla', email: 'sreeram@gmail.com', salary: 10000, firstName: 'Sreeram', lastName: 'Kondagorla', gender: 'Male', mobileNumber: 7799667565 },
        { id: 2, name: 'Ramesh Jadi', email: 'ramesh@gmail.com', salary: 20000, firstName: 'Ramesh', lastName: 'Jadi', gender: 'Male', mobileNumber: 78787778 },
        { id: 3, name: 'Laxmi Kummari', email: 'laxmi@gmail.com', salary: 30000, firstName: 'Laxmi', lastName: 'Jadi', gender: 'FeMale', mobileNumber: 454455 },
        { id: 4, name: 'Laxmi Kummari', email: 'laxmi4@gmail.com', salary: 40000, firstName: 'Laxmi', lastName: 'Kondagorla', gender: 'FeMale', mobileNumber: 11212121 }
    ];
    getAll(): Employee[] {
        return this.lstEmployee;
    }
    getById(id: number): Employee {
        return this.lstEmployee.filter(x => x.id == id)[0];
    }
    create(employee: Employee) {
        employee.id = this.lstEmployee.length + 1;
        this.lstEmployee.push(employee);
    }
    update(id: number, employee: Employee) {
        let index = this.lstEmployee.findIndex(x => x.id == id);
        this.lstEmployee[index] = employee;
    }
    delete(id: number) {
        let index = this.lstEmployee.findIndex(x => x.id == id);
        this.lstEmployee.splice(index, 1);
    }
}