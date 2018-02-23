import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Video } from '../videos/shared/video';
import { VideosService } from '../videos/shared/videos.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    videos: Video[];
    videosTop: Video[];
    loaded: boolean = false;

    constructor(private _videosService: VideosService) { }

    ngOnInit() {
        var x = this._videosService.getVideos();
        x.snapshotChanges().subscribe(data => {
            this.videos = [];
            data.forEach(element => {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                this.videos.push(y as Video);
            });
            this.videosTop = _.orderBy(this.videos.slice(0, 3), ['timeStamp'], ['desc']);;
            this.loaded = true;
        });
    }
}