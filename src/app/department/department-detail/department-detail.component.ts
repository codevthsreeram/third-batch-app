import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../department.model';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  deptModel$: Observable<DepartmentModel>;
  constructor(private deptService: DepartmentService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.deptModel$ = this.deptService.getById(id);
  }
}
