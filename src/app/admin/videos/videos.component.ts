import { Component, Inject, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import {
	MatTableDataSource,
	MatSort,
	MatPaginator,
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatSnackBar
} from '@angular/material';
import _ from 'lodash';

import { VideosService } from '../../videos/shared/videos.service';
import { Video } from '../../models/video';
import { AdminVideoDeleteDialog } from './dialogs/delete.component';
import { AdminVideoDialog } from './dialogs/video.component';
import { AdminVideoHighlightDialog } from './dialogs/highlight.component';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'admin-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.scss']
})
export class AdminVideosComponent implements AfterViewInit, OnDestroy {
	destroy$: Subject<boolean> = new Subject<boolean>();

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	loading: boolean = true;
	tabIndex = 0;
	displayedColumns = ['select', 'title', 'description', 'link', 'highlight'];
	dataSource = new MatTableDataSource<Video>();
	selection = new SelectionModel<Video>(true, []);
	highlighted: Video[];

	constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private videosService: VideosService) { }

	ngAfterViewInit() {
		this.videosService.getVideos().snapshotChanges().takeUntil(this.destroy$).subscribe((data) => {
			let videos = [];
			data.forEach((element) => {
				var y = element.payload.toJSON();
				y['$key'] = element.key;
				videos.push(y as Video);
			});

			this.dataSource.data = videos;
			this.loading = false;
		});
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.getHighlighted();
	}

	applyVideoFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
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

	getHighlighted() {
		var x = this.videosService.getHighlightedVideos();
		x.snapshotChanges().takeUntil(this.destroy$).subscribe((data) => {
			this.highlighted = [];
			data.forEach((element) => {
				var y = element.payload.toJSON();
				y['$key'] = element.key;
				this.highlighted.push(y as Video);
			});
		});
	}

	videoDialog(isNew: boolean): void {
		let target = isNew ? new Video() : this.selection.selected[0];

		let dialogRef = this.dialog.open(AdminVideoDialog, {
			width: '450px',
			data: { video: target }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
			if (result) {
				if (isNew) {
					this.videosService.addVideo(result).then((data) => {
						this.openSnackBar('Video Saved', 'OKAY');
					});
				} else {
					this.videosService
						.updateVideo(this.selection.selected[0].$key, result)
						.then((data) => {
							this.openSnackBar('Video Saved', 'OKAY');
						})
						.catch((error) => {
							this.openSnackBar(error, 'OKAY');
						});
				}

				this.selection.clear();
			}
		});
	}

	videoDeleteDialog(): void {
		let targets = this.selection.selected;

		let dialogRef = this.dialog.open(AdminVideoDeleteDialog, {
			width: '400px',
			data: { count: targets.length }
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				targets.forEach((target) => {
					this.videosService.deleteVideo(target.$key);
				});
				this.openSnackBar(targets.length + ' video(s) deleted', 'OKAY');
				this.selection.clear();
			}
		});
	}

	hightlightDialog() {
		let target = this.selection.selected[0];

		if (!target.highlight && this.highlighted.length > 2) {
			this.openSnackBar('Only 3 videos can be highlighted', 'OKAY');
		} else {
			let key = target.$key;

			let dialogRef = this.dialog.open(AdminVideoHighlightDialog, {
				width: '500px',
				data: { title: target.title, highlighted: target.highlight }
			});

			dialogRef.afterClosed().subscribe((result) => {
				if (result) {
					delete target.$key;
					target.highlight = !target.highlight;
					this.videosService
						.updateVideo(key, target)
						.then((data) => {
							this.openSnackBar('Highlight Set', 'OKAY');
						})
						.catch((error) => {
							this.openSnackBar(error, 'OKAY');
						});
					this.selection.clear();
				}
			});
		}
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
