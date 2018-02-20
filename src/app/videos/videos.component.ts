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
  selectedVideo: any[];

  constructor(private router: Router, private _videosService: VideosService) {
    this._videosService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
    this.selectedVideo = [];
  }

  onVideoClick(value: any) {
    if (this.selectedVideo.indexOf(value) == -1) {
      this.selectedVideo.push(value);
    } else {
      this.selectedVideo.splice(value, 1);
    }
  }

  edit(selected) {
    this.router.navigate(["/video/edit/" + this.selectedVideo[0].$key.toString()]);
  }

  remove() {
    for (var video in this.selectedVideo) {
      this._videosService.deleteVideo(this.selectedVideo[video].$key);
    }
  }
}
