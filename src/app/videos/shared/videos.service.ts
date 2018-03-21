import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Video } from './video';
import 'rxjs/add/operator/map';

@Injectable()
export class VideosService {

  videos: AngularFireList<Video[]> = null;

  constructor(private db: AngularFireDatabase) {
    this.videos = this.db.list('videos') as AngularFireList<Video[]>;
  }

  getVideos() {
    this.videos = this.db.list('videos') as AngularFireList<Video[]>;
    return this.videos;
  }

  getVideo(key) {
    return this.db.object('/videos/' + key);
  }

  getHighlightedVideos() {
    this.videos = this.db.list('videos', ref => ref.orderByChild('highlight').equalTo(true)) as AngularFireList<Video[]>;
    return this.videos;
  }

  getRecentVideos() {
    this.videos = this.db.list('videos', ref => ref.orderByChild('timestamp')) as AngularFireList<Video[]>;
    return this.videos;
  }

  addVideo(newVideo) {
    return this.videos.push(newVideo);
  }

  updateVideo(key, updateVideo) {
    return this.videos.update(key, updateVideo);
  }

  deleteVideo(key: string) {
    return this.videos.remove(key)
  }
}
