import { Injectable, Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  providers:[VideoService]
})

@Injectable()
export class VideoService {
  private db= "http://raj:raj@ds161574.mlab.com:61574/express_first"
  // private baseUrl="http://127.0.0.1:3000"
  private getUrl="/api/videos";
  getDataUrl = this.db + this.getUrl;

  getVideos(){
    console.log("URL : ",this.getDataUrl)
    return this.http.get(this.getDataUrl)
    .map((response: Response)=>response.json());
  }

  constructor(
    private http:Http
  ) { }

}
