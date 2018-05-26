import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;

import { Article } from './shared/article';
import { ArticleService } from './shared/article.service';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  articlesTop: Article[];
  articleOpen: boolean;
  openArticle: any

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    const filter = []
    this.articles = [];
    this.articlesTop = [];
    this.articleService.getArticles()
      .snapshotChanges()
      .subscribe((data) => {
        let articles = [];
        data.forEach((element) => {
          var y = element.payload.toJSON();
          let x = (y as Article);
          x.title = x.title.toUpperCase()
          x.content = x.content.replace(new RegExp('http://www.lagginout.com/wp-content/', 'g'), 'assets/images/')
          if ((x.content.includes('assets/images/') || x.content.includes('data:image/jpeg;base64')) && x.type === 'post') {
            x.content = x.content.replace(new RegExp('img src', 'g'), 'img width="100%" src')
            const container = document.createElement('div')
            container.innerHTML = x.content
            if (container.getElementsByTagName('img')[0].getAttribute('src')) {
              x.image = container.getElementsByTagName('img')[0].getAttribute('src').toString()
            }

            if (isNaN(x.name as any)) {
              x.name = x.name.toUpperCase()
            }
            this.articles.push(x);
          } else if (new Date(x.date).getTime() > 1517547600000) {
            const container = document.createElement('div')
            container.innerHTML = x.content
            if (container.getElementsByTagName('img')[0].getAttribute('src')) {
              x.image = container.getElementsByTagName('img')[0].getAttribute('src').toString()
            }
            if (isNaN(x.name as any)) {
              x.name = x.name.toUpperCase()
            }
            this.articles.push(x);
          }
        });
        this.articlesTop = _.sortBy(this.articles, function (o) { return moment(o.date, "M/D/YYYY"); }).reverse();
      });
    this.handleLinkFrom()
  }

  orderByDate(arr, dateProp) {
    return arr.slice().sort(function (a, b) {
      return a[dateProp] < b[dateProp] ? -1 : 1;
    });
  }

  handleLinkFrom() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('index')) {
      const index = urlParams.get('index')
      if (this.articlesTop[index]) {
        this.handleOpenArticle(+index)
      } else {
        setTimeout(() => { this.handleLinkFrom() }, 500)
      }
    }
  }

  handleOpenArticle(index) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.body.style.overflowY = 'hidden';
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
    this.openArticle = this.articlesTop[index]
    this.articleOpen = true;
  }

  closeArticle() {
    document.body.style.overflowY = 'auto'
    document.getElementsByTagName('html')[0].style.overflow = "auto";
    this.articleOpen = false;
  }

}
