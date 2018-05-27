import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Playlist } from '../../models/playlist';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaylistsService {
	playlists: AngularFireList<Playlist[]> = null;

	constructor(private db: AngularFireDatabase) {
		this.playlists = this.db.list('playlists') as AngularFireList<Playlist[]>;
	}

	getPlaylists() {
		this.playlists = this.db.list('playlists') as AngularFireList<Playlist[]>;
		return this.playlists;
	}

	getPlaylist(key) {
		return this.db.object('/playlists/' + key);
	}

	addPlaylist(newPlaylist) {
		return this.playlists.push(newPlaylist);
	}

	updatePlaylist(key, updatePlaylist) {
		return this.playlists.update(key, updatePlaylist);
	}

	deletePlaylist(key: string) {
		return this.playlists.remove(key);
	}
}
