import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[fullscreen]"
})
export class FullscreenDirective  {
  @HostBinding("class.activated") activated: Boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, "activated");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, "activated");
  }
}
