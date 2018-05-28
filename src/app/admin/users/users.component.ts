import { Component, Inject, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import {
	MatTableDataSource,
	MatSort,
	MatPaginator,
	MatDialog,
	MatTabChangeEvent,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatSnackBar
} from '@angular/material';
import _ from 'lodash';
import { saveAs } from 'file-saver/FileSaver';

import { AuthService } from '../../core/auth.service';
import { ProfileService } from '../../core/profile.service';
import { User, UserProfile, Profile } from '../../models/user';
import { AdminUserDialog } from './dialogs/user/user.component';
import UserUtils from '../../models/user.utils';
import { Subject } from 'rxjs/Subject';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
	selector: 'users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit, OnDestroy {
	destroy$: Subject<boolean> = new Subject<boolean>();

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	tabIndex = 0;
	displayedColumns = ['select', 'name', 'email', 'roles'];
	dataSource = new MatTableDataSource<UserProfile>();
	selection = new SelectionModel<UserProfile>(true, []);
	users: UserProfile[];

	constructor(
		public auth: AuthService,
		private profileService: ProfileService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar
	) { }

	ngAfterViewInit() {
		const profiles$ = this.profileService.getProfilesSnapshot();
		const users$ = this.auth.getAllUsers();

		combineLatest(profiles$, users$, (profiles, usersData) => {
			let users = usersData.map((user) => {
				let _profiles: Profile[] = [];
				profiles.forEach((element) => {
					var y = element.payload.toJSON();
					y['uid'] = element.key;
					_profiles.push(y as Profile);
				});

				return UserUtils.mapToUserProfile(user, _profiles.find((p) => p.user_uid == user.uid));
			});
			this.dataSource.data = users;
			this.users = users;
		})
			.takeUntil(this.destroy$)
			.subscribe();
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
		this.tabIndex = tabChangeEvent.index;
		console.log('tab => ', tabChangeEvent.index);
	};

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected == numRows;
	}

	masterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach((row) => this.selection.select(row));
	}

	isRole(role: string) {
		let found = false;
		switch (role) {
			case 'admin':
				found = this.selection.selected[0].roles.admin;
				break;
			case 'editor':
				found = this.selection.selected[0].roles.editor;
				break;
		}
		return found;
	}

	roleDialog(add: boolean, role: string): void {
		let targets = this.selection.selected;

		let dialogRef = this.dialog.open(AdminUserRoleDialog, {
			width: '350px',
			data: { add: add, role: role }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
			if (result) {
				targets.forEach((target) => {
					if (role == 'admin') {
						this.auth.setUserAdmin(target, add);
						this.openSnackBar(
							add ? target.displayName + ' set to admin' : target.displayName + ' removed from admin',
							'OKAY'
						);
					} else if (role == 'editor') {
						this.auth.setUserEditor(target, add);
						this.openSnackBar(
							add ? target.displayName + ' set to editor' : target.displayName + ' removed from editor',
							'OKAY'
						);
					}
				});
				this.selection.clear();
			}
		});
	}

	downloadMailingList() {
		var rightNow = new Date();
		var res = rightNow.toISOString().slice(0, 10).replace(/-/g, '');
	}

	userDialog(): void {
		let target = this.selection.selected[0];

		let dialogRef = this.dialog.open(AdminUserDialog, {
			width: '450px',
			data: { user: target }
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				result.uid = target.uid;
				this.auth.updateUser(result);
				let updatedProfile = {
					user_uid: target.uid,
					name: result.displayName,
					phoneNumber: result.phoneNumber,
					mailing: target.profile.mailing
				};
				this.profileService.updateProfile(target.profile.uid, updatedProfile);
				this.openSnackBar('User Saved', 'OKAY');
				this.selection.clear();
			}
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000
		});
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}

@Component({
	selector: 'user-role-dialog',
	template: `<h1 mat-dialog-title>
              <span *ngIf="data.add">Add Role</span>
              <span *ngIf="!data.add">Remove Role</span>
              </h1>
           <div mat-dialog-content>
             <p *ngIf="data.add">Are you sure you want to set user(s) to {{data.role}}?</p>
             <p *ngIf="!data.add">Are you sure you want to remove user(s) from {{data.role}}?</p>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-raised-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
             <button mat-button [mat-dialog-close]="false">Cancel</button>
           </div>`
})
export class AdminUserRoleDialog {
	constructor(public dialogRef: MatDialogRef<AdminUserRoleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}
