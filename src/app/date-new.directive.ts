import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDateNew]'
})
export class DateNewDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'cyan';
  }

   }
