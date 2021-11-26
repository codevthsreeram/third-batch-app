import { Component, OnInit } from "@angular/core";
import { TodoModel } from "./todo.model";
import { TodoService } from "./todo.service";

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {
    lstTodo: TodoModel[];
    constructor(private todoService: TodoService) {

    }
    ngOnInit(): void {
        this.todoService.getAll()
            .subscribe(
                response => {
                    this.lstTodo = response as TodoModel[]
                },
                error => {
                    console.log(error)
                }
            )
    }
}