import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BntLoadingDirective } from "./directives/bnt-loading.directive";
import { FullscreenDirective } from "./directives/fullscreen.directive";

@NgModule({
  declarations: [BntLoadingDirective, FullscreenDirective],
  imports: [CommonModule],
  exports: [FullscreenDirective]
})
export class CoreModule {}
