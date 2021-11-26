import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  id: number;

  employee = new Employee();

  constructor(activeRoute: ActivatedRoute, private empService: EmployeeService) {
    this.id = parseInt(activeRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.employee = this.empService.getById(this.id);
  }
}
