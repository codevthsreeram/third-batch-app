import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addNewItem(newItem: string) {
    //console.log(newItem);
    this.newItemEvent.emit(newItem);
  }
}
