

import { Directive, ElementRef, Host, HostListener, Input, Optional } from '@angular/core';
import { AppService } from './services/app.service';

@Directive({
    selector: '[appBackColor]'
    //, providers:[AppService]

})

export class SampleTestDirective {
    @Input('appBackColor') highlightColor: string;
    constructor(private elf: ElementRef, @Optional() @Host() private appService: AppService) {
        //this.elf.nativeElement.style.backgroundColor = this.appService.getColor();
    }

    @HostListener('mouseenter') onMouseEnter() {
        const color = this.appService.getColor();
        //this.applyColor(color);
        this.applyColor(this.highlightColor);
    }

    @HostListener('mouseleave') onMousLeave() {
        this.applyColor(null);
    }
    
    private applyColor(color: string) {
        this.elf.nativeElement.style.backgroundColor = color;
    }

}