import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Video } from './video';
import 'rxjs/add/operator/map';

@Injectable()
export class VideosService {

  videos: FirebaseListObservable<Video[]> = null;

  constructor(private db: AngularFireDatabase) {
    this.videos = this.db.list('videos') as FirebaseListObservable<Video[]>;
  }

  getVideos() {
    this.videos = this.db.list('videos') as FirebaseListObservable<Video[]>;
    return this.videos;
  }

  addVideo(newVideo) {
    return this.videos.push(newVideo);
  }

  updateVideo(key, updateVideo) {
    return this.videos.update(key, updateVideo);
  }

  deleteVideo(key) {
    return this.videos.remove(key)
  }
}
