import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  inputs:['video']
})
export class VideoDetailsComponent implements OnInit, OnChanges{
  
  ngOnChanges(){
    this.editTitle=false;
  }

  private editTitle:boolean=false;


  constructor() { }
  
  

  onTitleClick(){
    this.editTitle=true;
  }

  ngOnInit() {
  }

}
