import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  imgUrl: string = "../assets/NotFound.png"
  constructor() { }

}
