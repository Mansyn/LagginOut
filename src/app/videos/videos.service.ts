import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Video } from './video';

@Injectable()
export class VideosService {

  private basePath: string = '/video';

  videos: FirebaseListObservable<Video[]> = null; //  list of objects
  video: FirebaseObjectObservable<Video> = null; //   single object

  constructor(private db: AngularFireDatabase) { }

  getVideos() {

    this.videos = this.db.list('videos') as FirebaseListObservable<Video[]>;
    return this.videos;

  }
}
