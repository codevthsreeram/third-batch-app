import { Component } from "@angular/core";
import { LanguagesService } from "./languages.service";

@Component({
    selector: 'languages',
    templateUrl: './languages.component.html'
})

export class LanguagesComponent {
    languages: string[];

    constructor(languagesService: LanguagesService) {
        let result = languagesService.getLanguages();
        //console.log(result);
        this.languages = languagesService.getLanguages();
    }
}