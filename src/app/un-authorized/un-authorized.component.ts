import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-un-authorized',
  templateUrl: './un-authorized.component.html',
  styleUrls: ['./un-authorized.component.css']
})
export class UnAuthorizedComponent {
  imgUrl: string = "../assets/unauthorized.jpg"
  constructor() { }
}
