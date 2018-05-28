import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Article } from '../../models/article';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {
	articles: AngularFireList<Article[]> = null;

	constructor(private db: AngularFireDatabase) {
		this.articles = this.db.list('articles') as AngularFireList<Article[]>;
	}

	getArticles() {
		this.articles = this.db.list('articles') as AngularFireList<Article[]>;
		return this.articles;
	}

	getArticle(key) {
		return this.db.object('/articles/' + key);
	}

	getUserArticles(uid: string) {
		this.articles = this.db.list('articles', ref => ref.orderByChild('editor_id').equalTo(uid)) as AngularFireList<Article[]>;
		return this.articles;
	}

	getUserArticlesData(uid: string): Observable<any> {
		let userevents = this.db.list('articles', ref => ref.orderByChild('editor_id').equalTo(uid)).snapshotChanges()
		return userevents
	}

	getRecentArticles() {
		this.articles = this.db.list('articles', (ref) => ref.orderByChild('timestamp')) as AngularFireList<Article[]>;
		return this.articles;
	}

	addArticle(newArticle) {
		const article = this.fillUndefinedValues(newArticle)

		return this.articles.push(article);
	}

	updateArticle(key, updateArticle) {
		return this.articles.update(key, updateArticle);
	}

	deleteArticle(key: string) {
		return this.articles.remove(key);
	}

	fillUndefinedValues(newArticle) {
		console.log(newArticle)
		for (let key in newArticle) {
			console.log(key, newArticle[key])
			if (!newArticle[key]) {
				newArticle[key] = ''
			}
		}
		let article = newArticle
		return article
	}
}