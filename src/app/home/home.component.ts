import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;

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

	constructor(
		private _videosService: VideosService,
		private embedService: EmbedVideoService,
		private articleService: ArticleService
	) { }

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
					attr: { width: 400, height: 250 }
        });
        y['iframe_html2'] = this.embedService.embed(y['link'], {
					image: 'mqdefault',
					query: { portrait: 0, color: '333' },
					attr: { width: '100%' }
				});
				this.videos.push(y as Video);
			});
      this.videosTop = _.orderBy(this.videos.slice(0, 3), ['timeStamp'], ['desc']);
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
            const container = document.createElement('div')
            container.innerHTML = x.content
            const img = container.getElementsByTagName('img')[0].getAttribute('src').toString()
            x.image = img

            if (isNaN(x.name as any)) {
              x.name = x.name.toUpperCase()
            }
						this.articles.push(x);
					} else if (new Date(x.date).getTime() > 1517547600000){
            const container = document.createElement('div')
            container.innerHTML = x.content
            const img = container.getElementsByTagName('img')[0].getAttribute('src').toString()
            x.image = img

            if (isNaN(x.name as any)) {
              x.name = x.name.toUpperCase()
            }
            this.articles.push(x);
          }
				});
        // this.articlesTop = _.orderBy(this.articles, ['date'], ['asc']).slice(0, 11);
        this.articlesTop = _.sortBy(this.articles, function (o) { return moment(o.date, "M/D/YYYY"); }).reverse().slice(0, 11);

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
			});
	}

	handleRouteToArticle(i) { }
}
