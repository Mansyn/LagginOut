import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { Article } from '../../articles/shared/article';
import { ArticleService } from '../../articles/shared/article.service';

@Component({
	selector: 'editor-articles',
	templateUrl: './articles.component.html',
	styleUrls: [ './articles.component.scss' ]
})
export class EditorArticlesComponent implements AfterViewInit {
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	displayedColumns = [ 'select', 'title', 'content', 'date' ];
	dataSource = new MatTableDataSource<Article>();
	selection = new SelectionModel<Article>(false, []);

	constructor(public snackBar: MatSnackBar, private videosService: ArticleService) {}

	ngAfterViewInit() {
		this.videosService.getArticles().snapshotChanges().subscribe((data) => {
			let articles = [];
			data.forEach((element) => {
				var y = element.payload.toJSON();
				y['$key'] = element.key;
				articles.push(y as Article);
			});

			this.dataSource.data = articles;
		});
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}
