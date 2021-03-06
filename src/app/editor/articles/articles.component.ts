import { Component, AfterViewInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { SelectionModel } from '@angular/cdk/collections'
import {
	MatTableDataSource,
	MatSort,
	MatPaginator,
	MatDialog,
	MatSnackBar
} from '@angular/material'

import * as moment from 'moment'
import _ from 'lodash'

import { AuthService } from '../../core/auth.service'
import { Article } from '../../models/article'
import { ArticleService } from '../../articles/shared/article.service'
import { EditorArticleDialog } from './dialogs/article.component'
import { EditorArticleDeleteDialog } from './dialogs/delete.component'

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
	user: any;

	constructor(
		private router: Router,
		public auth: AuthService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		private articlesService: ArticleService
	) {
		this.loading = true;
	}

	ngAfterViewInit() {
		this.auth.user$.subscribe((user) => {
			var x = 0;
			this.articlesService.getUserArticles(user.uid).snapshotChanges().subscribe((data) => {
				this.user = user;

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
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach((row) => this.selection.select(row));
	}

	articleDialog(isNew: boolean): void {
		let target = isNew ? new Article() : this.selection.selected[0];

		target.editor_id = this.user.uid;

		let dialogRef = this.dialog.open(EditorArticleDialog, {
			width: '900px',
			data: { article: target }
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				// to go fullscreen
				if (result.fullscreen) {
					this.router.navigate(['/editor/article', result.new ? '' : target.$key]);
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

		let dialogRef = this.dialog.open(EditorArticleDeleteDialog, {
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
}
