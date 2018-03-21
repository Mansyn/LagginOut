import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Video } from '../videos/shared/video';
import { VideosService } from '../videos/shared/videos.service';


import { Article } from '../articles/shared/article';
import { ArticleService } from '../articles/shared/article.service';

import { EmbedVideoService } from 'ngx-embed-video';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	videos: Video[];
	videosTop: Video[];
	articles: Article[];
	articlesTop: Article[];
	newArticles = [];
	articlesImages = []
	vloaded: boolean = false;
	aloaded: boolean = false;

	constructor(private _videosService: VideosService, private embedService: EmbedVideoService, private articleService: ArticleService) { }

	ngOnInit() {
		this.handleVideos()
		this.handleArticles()
	}

	handleVideos() {
		var x = this._videosService.getHighlightedVideos();
		x.snapshotChanges().subscribe((data) => {
			this.videos = [];
			data.forEach((element) => {
				var y = element.payload.toJSON();
				y['$key'] = element.key;
				y['iframe_html'] = this.embedService.embed(y['link'], {
					image: 'mqdefault',
					query: { portrait: 0, color: '333' },
					attr: { width: 450, height: 321 }
				});
				this.videos.push(y as Video);
			});
			this.videosTop = _.orderBy(this.videos.slice(0, 3), ['timeStamp'], ['desc']);
			this.vloaded = true;
		});
	}

	handleArticles() {
		const filter = []
		this.articles = [];
		this.articlesTop = [];
		this.articleService.getArticles()
			.snapshotChanges()
			.subscribe((data) => {
				let articles = [];
				this.newArticles = [];
				data.forEach((element) => {
					var y = element.payload.toJSON();
					let x = (y as Article);
					x.content = x.content.replace(new RegExp('http://www.lagginout.com/wp-content/', 'g'), 'assets/images/')
					if ((x.content.includes('assets/images/') || x.content.includes('data:image/jpeg;base64')) && x.type === 'post') {
						this.articles.push(x);
					}
				});
				this.articlesTop = _.orderBy(this.articles, ['date'], ['asc']).slice(0, 11);

				for (let i = 0; i < this.articlesTop.length; i++) {
					let x = this.articlesTop[i]
					if (x.content.includes('width="100%" />')) {
						let img = x.content.slice(x.content.indexOf('<img src'), (x.content.indexOf('width="100%" />') + 15))
						this.articlesImages.push(img)
					} else {
						let img = x.content.slice(x.content.indexOf('<img src'), (x.content.indexOf('">') + 2))
						img = img.replace(new RegExp('img src', 'g'), 'img width="100%" src')
						this.articlesImages.push(img)
					}
				}
				this.aloaded = true;
			});
	}

	handleRouteToArticle(i) { }
}
