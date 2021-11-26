import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Employee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {
    employee = new Employee();
    alertMessage: string;
    title: string = 'Add Employee';
    lstEmployee: Employee[];

    empForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        salary: new FormControl(0, Validators.required)
    })
    get name() {
        return this.empForm.get('name');
    }
    get email() {
        return this.empForm.get('email');
    }
    get salary() {
        return this.empForm.get('salary');
    }
    constructor(private empService: EmployeeService) {
    }

    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.lstEmployee = this.empService.getAll();
    }
    addEmployee() {
        this.employee = new Employee();
        this.alertMessage = '';
        this.title = 'Add Employee';
    }
    editEmployee(employee: Employee) {
        this.employee = employee;
        this.alertMessage = '';
        this.title = 'Edit Employee';
    }
    deleteEmployee(id: number) {
        if (confirm("Are you sure to delete ?")) {
            this.empService.delete(id);
            this.alertMessage = 'Employee deleted successfully...!';
            this.loadData();
        }
    }
    saveEmployee() {
        if (this.employee.id) {
            this.empService.update(this.employee.id, this.employee);
            this.alertMessage = 'Employee updated successfully...!';
        }
        else {
            this.empService.create(this.employee);
            this.alertMessage = 'Employee created successfully...!';
        }
        this.employee = new Employee();
        this.loadData();
        this.empForm.reset();
    }
}