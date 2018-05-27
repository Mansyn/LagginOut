import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { TwitchStreamer } from '../../models/streamer';

@Injectable()
export class TwitchService {
	private basePath: string = '/streamers';

	streamers: AngularFireList<TwitchStreamer[]> = null;

	constructor(private db: AngularFireDatabase) {
		this.streamers = this.db.list(this.basePath) as AngularFireList<TwitchStreamer[]>;
	}

	getStreamers() {
		this.streamers = this.db.list(this.basePath) as AngularFireList<TwitchStreamer[]>;
		return this.streamers;
	}

	getStreamer(key) {
		return this.db.object(this.basePath + '/' + key);
	}

	addStreamer(newStreamer) {
		return this.streamers.push(newStreamer);
	}

	updateStreamer(key, updateStreamer) {
		return this.streamers.update(key, updateStreamer);
	}

	deleteStreamer(key: string) {
		return this.streamers.remove(key);
	}
}
