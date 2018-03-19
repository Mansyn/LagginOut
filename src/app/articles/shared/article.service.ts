import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Article } from './article';
import 'rxjs/add/operator/map';

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

	getRecentArticles() {
		this.articles = this.db.list('articles', (ref) => ref.orderByChild('timestamp')) as AngularFireList<Article[]>;
		return this.articles;
	}

	addArticle(newArticle) {
		return this.articles.push(newArticle);
	}

	updateArticle(key, updateArticle) {
		return this.articles.update(key, updateArticle);
	}

	deleteArticle(key: string) {
		return this.articles.remove(key);
	}
}
