import {
  Directive,
  ElementRef,
  Optional,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[afFocusOnError]'
})
export class FocusOnErrorDirective {
  public get invalid() {
    return this.control ? this.control.invalid : false;
  }
  public focus() {
    this.el.nativeElement.focus();
  }
  constructor(@Optional() private control: NgControl, private el: ElementRef) { }
}
