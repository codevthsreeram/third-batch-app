import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>This is my component</h1>',
  templateUrl: './app.component.html',
  //styles: ['.btnStyle { colcor : red ;}', '.txtStyle { border : 1px; }'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIRST-ANGULAR-PROJECT';
  topic: string = 'Input and Output Integration';
  viewMode: string = 'course';
  text: string = 'This is my first course. I can learn this course in 2 months';
  salary = 1000;
  todayDate: Date = new Date();
  pi: number = 3.14159265359;
  a: number = 0.2645;
  result: string = '';

  changeViewMode(mode: string) {
    this.viewMode = mode;
  }
  logout() {
    localStorage.clear();
  }
}
