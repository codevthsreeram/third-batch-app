import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
    isActive: boolean = false;
    title: string = 'List of courses';
    colspan: number = 3;
    imageUrl: string = 'https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg';
    courses: string[];

    constructor(courseService: CoursesService) {
        this.courses = courseService.getCourses();
    }

    getTitle() {
        return this.title;
    }
    showAlert() {
        alert('This alert is coming from template button...');
    }
}