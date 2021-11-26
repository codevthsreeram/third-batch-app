import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { environment } from "src/environments/environment";
import { CourseDetailComponent } from "../course-detail/course-detail.component";
import { CourseService } from "../course.service";
import { CourseComponent } from "./course.component";
const routes: Route[] = [
    {
        path: ':id',
        component: CourseDetailComponent
    },
    {
        path: '',
        component: CourseComponent
    }
]
@NgModule({
    declarations: [CourseComponent, CourseDetailComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [CourseService],
    bootstrap: []
})

export class CourseModule { }