import { Directive, Input, AfterViewInit } from "@angular/core";
import { ElementRef } from "@angular/core";

@Directive({
  selector: "[spinnerBtn]"
})
export class BntLoadingDirective implements AfterViewInit {
  /**
   * Flag to indicate if it's waiting
   */
  @Input("spinnerBtn") wait: boolean;
  /**
   * Text that button will show on loading
   */
  @Input("label") label: string;
  /**
   * Flag to indicate que button has been loaded
   */
  private started: boolean = false;
  /**
   * Text that button will show in normal state
   */
  private default_content: null;
  /**
   * Constructor
   * @param el
   */
  constructor(private el: ElementRef) {}
  /**
   * After view init
   */
  ngAfterViewInit() {
    this.default_content = this.el.nativeElement.innerHTML;
    this.started = true;
  }
  /**
   * On every change of element
   */
  ngOnChanges() {
    if (this.wait) {
      this.el.nativeElement.innerHTML = `
        <span class="wrap_spinner">
        <svg class="c_spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" ></circle>
        </svg>
        </span>
        <label>${this.label}</label>`;
    } else if (this.started === true && this.wait === false) {
      this.el.nativeElement.innerHTML = `${this.default_content}`;
    }
  }
}
