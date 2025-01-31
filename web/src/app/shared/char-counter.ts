import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appCharCounter]'
})
export class CharCounterDirective {
    @Input() maxLength = 0;
    currentCount = 0;

    @HostListener('input', ['$event.target'])
    onInput(textarea: HTMLTextAreaElement) {
        this.currentCount = textarea.value.length;
    }
}