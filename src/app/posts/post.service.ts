import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonService } from "../common/common.service";

@Injectable()

export class PostService extends CommonService {
    constructor(public httpClient: HttpClient) {
        super('https://jsonplaceholder.typicode.com/posts', httpClient)
    }
}