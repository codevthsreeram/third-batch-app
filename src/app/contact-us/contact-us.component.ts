import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(courseService: CoursesService) {

  }
}
