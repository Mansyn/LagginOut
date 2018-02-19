import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VideosService } from './videos.service';

import { Video } from './Video';

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  videos: Video[];

  activeVideo: string;

  constructor(private router: Router, private _videosService: VideosService) {
    this._videosService.getVideos().subscribe(videos => {
      this.videos = videos;
    })
  }

  go(selected) {
    this.router.navigate(["/videos/edit/" + selected.$key]);
  }
}
