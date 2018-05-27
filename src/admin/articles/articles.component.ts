import { Component, Inject, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs/Subject';
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

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;
import _ from 'lodash';

import { ArticleService } from './article.service';
import { Article } from '../../models/article';
import { AdminArticleDeleteDialog } from './dialogs/delete.component';
import { AdminArticleDialog } from './dialogs/article.component';

@Component({
	selector: 'admin-articles',
	templateUrl: './articles.component.html',
	styleUrls: [ './articles.component.scss' ]
})
export class AdminArticlesComponent implements AfterViewInit, OnDestroy {
	destroy$: Subject<boolean> = new Subject<boolean>();

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	loading: boolean;
	displayedColumns = [ 'select', 'title', 'name', 'status', 'date' ];
	dataSource = new MatTableDataSource<Article>();
	selection = new SelectionModel<Article>(true, []);

	constructor(
		private router: Router,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		private articlesService: ArticleService
	) {
		this.loading = true;
	}

	ngAfterViewInit() {
		this.articlesService.getArticles().snapshotChanges().takeUntil(this.destroy$).subscribe((data) => {
			let articles = [];
			data.forEach((element) => {
				var y = element.payload.toJSON();
				y['$key'] = element.key;
				articles.push(y as Article);
			});

			this.dataSource.data = articles;
			this.loading = false;
		});
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	formDate(date) {
		return moment(date, 'M/D/YYYY').format('l');
	}

	applyArticleFilter(filterValue: string) {
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

	articleDialog(isNew: boolean): void {
		let target = isNew ? new Article() : this.selection.selected[0];

		let dialogRef = this.dialog.open(AdminArticleDialog, {
			width: '900px',
			data: { article: target }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
			if (result) {
				// to go fullscreen
				if (result.fullscreen) {
					this.router.navigate([ '/admin/article', result.new ? '' : target.$key ]);
				} else {
					if (isNew) {
						this.articlesService.addArticle(result).then((data) => {
							this.openSnackBar('Article Saved', 'OKAY');
						});
					} else {
						this.articlesService
							.updateArticle(this.selection.selected[0].$key, result)
							.then((data) => {
								this.openSnackBar('Article Saved', 'OKAY');
							})
							.catch((error) => {
								this.openSnackBar(error, 'OKAY');
							});
					}
				}

				this.selection.clear();
			}
		});
	}

	articleDeleteDialog(): void {
		let targets = this.selection.selected;

		let dialogRef = this.dialog.open(AdminArticleDeleteDialog, {
			width: '400px',
			data: { count: targets.length }
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				targets.forEach((target) => {
					this.articlesService.deleteArticle(target.$key);
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
