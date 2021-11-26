import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { DepartmentService } from "./department.service";
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
const routes: Route[] = [
    {
        path: ':id',
        component: DepartmentDetailComponent
    },
    {
        path: '',
        component: DepartmentComponent
    }
]
@NgModule({
    declarations: [DepartmentComponent, DepartmentDetailComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
    ],
    providers: [DepartmentService],
    bootstrap: []
})

export class DepartmentModule { }