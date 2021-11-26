import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tilecase'
})
export class TileCasePipe implements PipeTransform {
    transform(value: string) {
        if (!value)
            return null;

        let words = value.split(' ');

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPrePositionExists(word)) {
                words[i] = word.toLowerCase();
            }
            else {
                words[i] = this.toTileCase(word);
            }
        }
        let result = words.join(' ');
        return result;
    }
    private isPrePositionExists(word: string): boolean {
        let prePositions: string[] = ['of', 'the'];
        return prePositions.includes(word.toLowerCase());
    }
    private toTileCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
}