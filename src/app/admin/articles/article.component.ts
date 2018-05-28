import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;

import { ArticleService } from '../../articles/shared/article.service'
import { Article } from '../../models/article';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'admin-article',
	templateUrl: './article.component.html',
	styleUrls: ['./articles.component.scss']
})
export class AdminArticleComponent implements OnInit, OnDestroy {
	destroy$: Subject<boolean> = new Subject<boolean>();

	id: number;
	sub: any;

	article: Article;
	form: FormGroup;
	public editor;
	public quillOptions = {
		placeholder: 'insert content...'
	};

	constructor(
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private _location: Location,
		public snackBar: MatSnackBar,
		private articlesService: ArticleService
	) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			this.id = +params['id']; // (+) converts string 'id' to a number
			if (this.id == 0) {
				this.article = new Article();
				this.form = this.fb.group({
					title: [
						this.article.title || null,
						Validators.compose([Validators.maxLength(50), Validators.required])
					],
					name: [this.article.name || null, Validators.maxLength(50)],
					date: [this.article.date || moment(), Validators.required],
					type: [this.article.type || null, Validators.required],
					excerpt: [this.article.excerpt || null, Validators.maxLength(100)],
					content: [this.article.content || null]
				});
				this.article.type = 'post';
			} else {
				this.articlesService
					.getArticle(this.id)
					.snapshotChanges()
					.takeUntil(this.destroy$)
					.subscribe((data) => {
						var y = data.payload.toJSON();
						y['$key'] = data.key;
						this.article = y as Article;

						this.article.date = moment(this.article.date, 'M/D/YYYY').toDate();
						this.form = this.fb.group({
							title: [
								this.article.title || null,
								Validators.compose([Validators.maxLength(50), Validators.required])
							],
							name: [this.article.name || null, Validators.maxLength(50)],
							date: [this.article.date || moment(), Validators.required],
							type: [this.article.type || null, Validators.required],
							excerpt: [this.article.excerpt || null, Validators.maxLength(100)],
							content: [this.article.content || null]
						});
					});
			}
		});
	}

	onEditorCreated(quill) {
		this.editor = quill;
	}

	backClicked() {
		this._location.back();
	}

	formDate(date) {
		return moment(date, 'M/D/YYYY').format('l');
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000
		});
	}

	onContentChanged({ quill, html, text }) {
		//console.log('quill content is changed!', quill, html, text);
	}

	saveArticle() {
		if (this.form.valid) {
			let now = new Date().toDateString();

			let article = {
				content: this.article.content || '',
				date: moment(this.article.date).format('l'),
				editor_id: this.article.editor_id,
				excerpt: this.article.excerpt || '',
				guid: this.article.guid,
				id: this.article.id,
				mime_type: this.article.mime_type,
				name: this.article.name || '',
				status: this.article.status,
				title: this.article.title,
				type: this.article.type,
				timeStamp: now
			};

			if (this.id == 0) {
				this.articlesService.addArticle(article).then((data) => {
					this.openSnackBar('Article Saved', 'OKAY');
					this._location.back();
				});
			} else {
				this.articlesService
					.updateArticle(this.id.toString(), article)
					.then((data) => {
						this.openSnackBar('Article Saved', 'OKAY');
						this._location.back();
					})
					.catch((error) => {
						this.openSnackBar(error, 'OKAY');
					});
			}
		} else {
			console.log('invalid form');
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}
