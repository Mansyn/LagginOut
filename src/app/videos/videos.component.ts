import { Component, OnInit } from '@angular/core';

import { VideosService } from './videos.service';

import { Video } from './Video';

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Video[];

  constructor(private _videosService: VideosService) {
    this._videosService.getVideos().subscribe(videos => {
      this.videos = videos;
    })
  }

  ngOnInit() {
  }



}
