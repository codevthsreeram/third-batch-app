import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[highlihter]'
})


export class HighLighterDirective {
    constructor(private elRef: ElementRef) {
        elRef.nativeElement.style.background = 'yellow';
    }
}