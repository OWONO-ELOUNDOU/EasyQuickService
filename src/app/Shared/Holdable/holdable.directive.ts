import { Directive, EventEmitter, Input, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoldable]',
  standalone: true
})
export class HoldableDirective {

  @Output() hold = new EventEmitter()

  constructor() { }


}
