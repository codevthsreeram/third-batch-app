import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({ selector: 'full-detail', templateUrl: './employee-full-detail.component.html' })
export class EmployeeFullDetailComponent implements OnInit {

    id: number;
    employee = new Employee();

    constructor(activeRoute: ActivatedRoute, private empService: EmployeeService) {
        this.id = parseInt(activeRoute.snapshot.paramMap.get('id'));
    }

    ngOnInit(): void {
        this.employee = this.empService.getById(this.id);
    }

}