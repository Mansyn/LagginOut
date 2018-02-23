import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Video } from '../videos/shared/video';
import { VideosService } from '../videos/shared/videos.service';

import { EmbedVideoService } from 'ngx-embed-video';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    videos: Video[];
    videosTop: Video[];
    loaded: boolean = false;

    constructor(private _videosService: VideosService, private embedService: EmbedVideoService) { }

    ngOnInit() {
        var x = this._videosService.getVideos();
        x.snapshotChanges().subscribe(data => {
            this.videos = [];
            data.forEach(element => {
                var y = element.payload.toJSON();
                y['$key'] = element.key;
                y['iframe_html'] = this.embedService.embed(y['link'], { image: 'mqdefault', query: { portrait: 0, color: '333' }, attr: { width: 350, height: 250 } });
                this.videos.push(y as Video);
            });
            this.videosTop = _.orderBy(this.videos.slice(0, 3), ['timeStamp'], ['desc']);;
            this.loaded = true;
        });
    }
}