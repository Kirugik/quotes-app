import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.background = "yellow";
  }

}
