import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  //setter for parallax effect factor
  //default to 1
  @Input() set factor(val: number) {
    this._factor = val ? val : 1;
  }

  private _factor: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    //default factor to 1
    this._factor = 1;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    //adjust the element to scroll at a different
    //rate than other elements
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'style',
      `transform: translateY(${this.getTranslation()}px)`);
  }

  private getTranslation() {
    return window.scrollY * this._factor / 10;
  }
}
