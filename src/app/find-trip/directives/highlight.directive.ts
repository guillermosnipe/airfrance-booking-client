import { Directive, Input, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[afHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() afSubmitted: string;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnChanges(): void {
    const el = this.renderer.selectRootElement(this.el.nativeElement);
    if (el && el.classList.contains('ng-invalid') && el.focus && this.afSubmitted) {
      setTimeout(() => el.focus());
    }
  }

}