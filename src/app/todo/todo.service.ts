import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonService } from "../common/common.service";

@Injectable()

export class TodoService extends CommonService {
    constructor(public httpClient: HttpClient) {
        super('https://jsonplaceholder.typicode.com/todos', httpClient)
    }
}