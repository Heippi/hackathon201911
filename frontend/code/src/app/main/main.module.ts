import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatGridListModule } from "@angular/material/grid-list";
import { VideoMatrixComponent } from "./video-matrix/video-matrix.component";
import { FuseSidebarModule } from "@fuse/components";
import { MatDialogModule } from "@angular/material/dialog";
import { CoreModule } from "app/core/core.module";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { HotelsComponent } from "./hotels/hotels.component";
const routes = [
  {
    path: "",
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      { path: "dashboard", component: DashboardComponent },
      { path: "login", component: LoginComponent }
    ]
  }
];

@NgModule({
  declarations: [
    VideoMatrixComponent,
    DashboardComponent,
    LoginComponent,
    HotelsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes),

    TranslateModule,
    FuseSidebarModule,
    FuseSharedModule,

    // NG Material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRadioModule,
    MatSliderModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatStepperModule,
    MatInputModule
  ],
  entryComponents: []
})
export class MainModule {}
