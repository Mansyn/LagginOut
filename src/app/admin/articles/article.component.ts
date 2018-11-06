import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core'
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material'
import { takeUntil } from 'rxjs/operators'

import * as _moment from 'moment'
const moment = _moment

import { ArticleService } from '../../articles/shared/article.service'
import { Article } from '../../models/article'
import { Subject } from 'rxjs'

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
			this.id = params['id']; // (+) converts string 'id' to a number
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
					.pipe(takeUntil(this.destroy$))
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

	onSubmit() {
		if (this.form.valid) {
			let form = this.form.value
			let now = new Date().toDateString();

			let article = {
				content: form.content || '',
				date: moment(form.date).format('l'),
				editor_id: this.article.editor_id,
				excerpt: form.excerpt || '',
				guid: this.article.guid,
				id: this.article.id,
				mime_type: this.article.mime_type,
				name: form.name || '',
				status: this.article.status,
				title: form.title,
				type: form.type,
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
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}
