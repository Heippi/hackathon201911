import {
  Component,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnDestroy
} from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { ux } from "app/core/ux";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
const JSMpeg = require("jsmpeg-player");

@Component({
  selector: "app-video-matrix",
  templateUrl: "./video-matrix.component.html",
  styleUrls: ["./video-matrix.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class VideoMatrixComponent implements OnDestroy, AfterViewInit {
  /**
   * Amount of columns in the grid list.
   */
  public gridCols = 3;
  /**
   * ...
   */
  public ux = ux;

  constructor(private cdRef: ChangeDetectorRef, private router: Router) {}

  ngAfterViewInit(): void {
    this.ux.videos.forEach(video => {
      console.log(video);

      if (video.active && video.videoObject !== null) {
        // Destroy last data
        video.videoObject.destroy();
        video.videoObject = null;
      }

      // Creates a new instance
      video.videoObject = new JSMpeg.VideoElement(
        `#video_frame_${video.id}`,
        video.videoUrl
      );
      video.active = true;
      this.cdRef.detectChanges();
    });

    /* let active = true;
    if (active !== this.ux.videos[0].active) {
      // check if it change, tell CD update view
      this.ux.videos[0].active = true;
      this.cdRef.detectChanges();
    }

    if (Object.keys(this.ux.videos[0].videoObject)[0]) {
      console.log("we have a video");

      this.ux.videos[0].videoObject.destroy();
      this.ux.videos[0].videoObject = {};
      this.ux.videos[0].videoObject = new JSMpeg.VideoElement(
        "#video_frame_0",
        this.ux.videos[0].videoUrl
      );
    } else {
      console.log("we don't have a video");
      this.ux.videos[0].videoObject = new JSMpeg.VideoElement(
        "#video_frame_0",
        this.ux.videos[0].videoUrl
      );
    } */
  }

  ngOnDestroy(): void {
    this.ux.videos.forEach(video => {
      if (video.active && video.videoObject !== null) {
        // Destroy last data
        video.videoObject.destroy();
        video.videoObject = null;
      }
    });
  }

  public goToStreamAnalysis(video) {
    if (video.videoUrl === null) {
      this.router.navigate(["/main/configurations/"]);
    } else {
      this.router.navigate(["/main/stream-analysis/" + video.id]);
    }
  }

  public addNewVideoSource(): void {
    this.ux.videos.push({
      id: this.ux.videos.length + 1,
      active: false,
      videoUrl: null,
      jsonUrl: null,
      videoObject: {}
    });
  }
}
