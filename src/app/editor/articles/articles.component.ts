import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;
import _ from 'lodash';

import { AuthService } from '../../core/auth.service';
import { User } from '../../core/user';
import { Article } from '../../articles/shared/article';
import { ArticleService } from '../../articles/shared/article.service';

@Component({
	selector: 'editor-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})
export class EditorArticlesComponent implements AfterViewInit {

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	loading: boolean;
	displayedColumns = ['select', 'title', 'name', 'status', 'date'];
	dataSource = new MatTableDataSource<Article>();
	selection = new SelectionModel<Article>(true, []);

	constructor(
		public auth: AuthService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		private articlesService: ArticleService) {
		this.loading = true;
	}

	ngAfterViewInit() {
		this.auth.user$.subscribe((user) => {
			var x = 0;
			this.articlesService.getUserArticles(user.uid).snapshotChanges().subscribe((data) => {
				let articles = [];
				data.forEach((element) => {
					var y = element.payload.toJSON();
					y['$key'] = element.key;
					articles.push(y as Article);
				});

				this.dataSource.data = articles;
				this.loading = false;
			});
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
		this.isAllSelected() ?
			this.selection.clear() :
			this.dataSource.data.forEach(row => this.selection.select(row));
	}

	articleDialog(isNew: boolean): void {
		let target = isNew ? new Article() : this.selection.selected[0];
    console.log('in articleDialog()', target)

    
	}

	articleDeleteDialog(): void {
		let targets = this.selection.selected;

	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000
		});
	}
}
