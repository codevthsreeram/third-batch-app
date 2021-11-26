import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        let actualLimit: number = limit ? limit : 10;
        let result = value.substr(0, actualLimit) + '...';
        return result;
    }
}