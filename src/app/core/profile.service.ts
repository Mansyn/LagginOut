import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Profile } from '../models/user'
import { Observable } from 'rxjs'

@Injectable()
export class ProfileService {
	profiles: AngularFireList<Profile[]> = null;

	constructor(private db: AngularFireDatabase) {
		this.profiles = this.db.list('profiles') as AngularFireList<Profile[]>;
	}

	getProfiles() {
		this.profiles = this.db.list('profiles') as AngularFireList<Profile[]>;
		return this.profiles;
	}

	getProfilesData(): Observable<any> {
		return this.db.list('profiles').valueChanges();
	}

	getProfilesSnapshot(): Observable<any> {
		return this.db.list('profiles').snapshotChanges();
	}

	getProfile(key) {
		return this.db.object('/profiles/' + key);
	}

	getUserProfile(user_uid) {
		return this.db.list('profiles', ref => ref.orderByChild('user_uid').equalTo(user_uid)).snapshotChanges()
	}

	getUserProfileData(user_uid) {
		return this.db.list('profiles', (ref) => ref.orderByChild('user_uid').equalTo(user_uid)).valueChanges();
	}

	addProfile(newProfile) {
		return this.profiles.push(newProfile);
	}

	updateProfile(key, updateProfile) {
		return this.profiles.update(key, updateProfile);
	}

	deleteProfile(key: string) {
		return this.profiles.remove(key);
	}
}
