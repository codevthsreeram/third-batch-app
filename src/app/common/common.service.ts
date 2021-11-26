import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class CommonService {

    constructor(@Inject(String) private apiBaseUrl: string, public httpClient: HttpClient) {
    }
    getAll() {
        return this.httpClient.get(this.apiBaseUrl);
    }
    create(createModel: any) {
        return this.httpClient.post(this.apiBaseUrl, createModel);
    }
    update(id: number, updateModel: any) {
        let url: string = this.apiBaseUrl + '/' + id;
        return this.httpClient.put(url, updateModel);
    }
    delete(id: number) {
        let url: string = this.apiBaseUrl + '/' + id;
        return this.httpClient.delete(url);
    }
    getById(id: number) {
        let url: string = this.apiBaseUrl + '/' + id;
        return this.httpClient.get(url);
    }
}
