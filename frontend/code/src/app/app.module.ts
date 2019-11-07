import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
  FuseProgressBarModule,
  FuseSidebarModule,
  FuseThemeOptionsModule
} from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { MainModule } from "./main/main.module";
import { MatToolbarModule } from "@angular/material/toolbar";

const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "main"
  },
  {
    path: "main",
    loadChildren: "./main/main.module#MainModule"
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,

    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,

    // App modules
    LayoutModule,
    MainModule
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
