
import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Social } from './social'

@Injectable()
export class SocialService {
	links: AngularFireList<Social[]> = null;

	constructor(private db: AngularFireDatabase) {
		this.links = this.db.list('links') as AngularFireList<Social[]>;
	}

	getSocials() {
		this.links = this.db.list('links') as AngularFireList<Social[]>;
		return this.links;
	}

	getSocial(key) {
		return this.db.object('/links/' + key);
	}

	addSocial(newSocial) {
		return this.links.push(newSocial);
	}

	updateSocial(key, updateSocial) {
		return this.links.update(key, updateSocial);
	}

	deleteSocial(key: string) {
		return this.links.remove(key);
	}
}