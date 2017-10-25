import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from "app/Video";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs:['videos']
})
export class VideoListComponent implements OnInit {

  @Output()
  SelectVideo=new EventEmitter();

  onSelect(video:Video){
    console.log(video);
    
    this.SelectVideo.emit(video);

  }

  constructor() { }

  ngOnInit() {
  }

}
