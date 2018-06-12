import { Component, Inject, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs/Subject';
import {
	MatTableDataSource,
	MatSort,
	MatPaginator,
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatSnackBar
} from '@angular/material';

import { PlaylistsService } from '../../videos/shared/playlists.service'
import { Playlist } from '../../models/playlist';
import { AdminPlaylistDeleteDialog } from './dialogs/delete.component';
import { AdminPlaylistDialog } from './dialogs/playlist.component';

@Component({
	selector: 'admin-playlists',
	templateUrl: './playlists.component.html',
	styleUrls: ['./playlists.component.scss']
})
export class AdminPlaylistsComponent implements AfterViewInit, OnDestroy {
	destroy$: Subject<boolean> = new Subject<boolean>();

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	loading: boolean = true;
	tabIndex = 0;
	displayedColumns = ['select', 'title', 'url'];
	dataSource = new MatTableDataSource<Playlist>();
	selection = new SelectionModel<Playlist>(true, []);
	highlighted: Playlist[];

	constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private playlistsService: PlaylistsService) { }

	ngAfterViewInit() {
		this.playlistsService.getPlaylists().snapshotChanges().takeUntil(this.destroy$).subscribe((data) => {
			let playlists = [];
			data.forEach((element) => {
				var y = element.payload.toJSON();
				y['$key'] = element.key;
				playlists.push(y as Playlist);
			});

			this.dataSource.data = playlists;
			this.loading = false;
		});
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

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

	playlistDialog(isNew: boolean): void {
		let target = isNew ? new Playlist() : this.selection.selected[0];

		let dialogRef = this.dialog.open(AdminPlaylistDialog, {
			width: '450px',
			data: { playlist: target }
		});

		dialogRef.afterClosed().subscribe((result) => {
			// console.log('The dialog was closed');
			if (result) {
				if (isNew) {
					this.playlistsService.addPlaylist(result).then((data) => {
						this.openSnackBar('Playlist Saved', 'OKAY');
					});
				} else {
					this.playlistsService
						.updatePlaylist(this.selection.selected[0].$key, result)
						.then((data) => {
							this.openSnackBar('Playlist Saved', 'OKAY');
						})
						.catch((error) => {
							this.openSnackBar(error, 'OKAY');
						});
				}

				this.selection.clear();
			}
		});
	}

	playlistDeleteDialog(): void {
		let targets = this.selection.selected;

		let dialogRef = this.dialog.open(AdminPlaylistDeleteDialog, {
			width: '400px',
			data: { count: targets.length }
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				targets.forEach((target) => {
					this.playlistsService.deletePlaylist(target.$key);
				});
				this.openSnackBar(targets.length + ' article(s) deleted', 'OKAY');
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
