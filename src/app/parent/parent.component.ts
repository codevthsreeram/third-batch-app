import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  fruits: string[] = ['Apple', 'Mango', 'Banana', 'Grapes'];
  constructor() { }

  ngOnInit(): void {
  }
  addItem(item: string) {
    //console.log(item);
    this.fruits.push(item);
  }
}
