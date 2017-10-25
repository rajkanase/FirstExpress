import { Component, OnInit } from '@angular/core';
import { Video } from "app/Video";
import { VideoService } from "app/video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[VideoService]
})
export class VideoCenterComponent implements OnInit {

  constructor(
    private videoService:VideoService
  ) { }

  videos: Array<Video>;

  selectedVideo:Video;



  onSelectVideo(video:any){
    this.selectedVideo=video;
    console.log(this.selectedVideo);
  }

  ngOnInit() {
    this.videoService.getVideos()
    .subscribe(resVideoData=>
      {
        // console.log(resVideoData);
        
        this.videos=resVideoData;
      });
  }

}
