
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Social } from './social';
import 'rxjs/add/operator/map';

@Injectable()
export class SocialService {
	links: AngularFireList<Social[]> = null;

	constructor(private db: AngularFireDatabase) {
		this.links = this.db.list('links') as AngularFireList<Social[]>;
	}

	getSocials() {
    console.log('in getSocials')
    this.links = this.db.list('links') as AngularFireList<Social[]>;
    console.log(this.links)
		return this.links;
	}

	getSocial(key) {
    console.log('in getSocial')
    console.log(this.db.object('/links/' + key))
		return this.db.object('/links/' + key);
	}

	addSocial(newSocial) {
    console.log('in addSocial')
		return this.links.push(newSocial);
	}

	updateSocial(key, updateSocial) {
    console.log('in updateSocial')
		return this.links.update(key, updateSocial);
	}

	deleteSocial(key: string) {
    console.log('in deleteSocial')
		return this.links.remove(key);
	}
}