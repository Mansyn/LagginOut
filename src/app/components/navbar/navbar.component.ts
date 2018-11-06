import { Component } from '@angular/core'
import { AuthService } from '../../core/auth.service'
import * as _ from 'lodash'
import { map } from 'rxjs/operators'

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	userRoles: Array<string>;

	constructor(public auth: AuthService) {
		auth.user$
			.pipe(
				map((user) => {
					return (this.userRoles = _.keys(_.get(user, 'roles')));
				}))
			.subscribe();
	}

	get isEditor(): boolean {
		const allowed = ['editor', 'admin'];
		return this.matchingRole(allowed);
	}

	get isAdmin(): boolean {
		const allowed = ['admin'];
		return this.matchingRole(allowed);
	}

	canAccessEditor() {
		return this.isEditor;
	}

	canAccessAdmin() {
		return this.isAdmin;
	}

	/// Helper to determine if any matching roles exist
	private matchingRole(allowedRoles): boolean {
		return !_.isEmpty(_.intersection(allowedRoles, this.userRoles));
	}
}
