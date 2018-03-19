import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

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
  loaded: boolean = false;
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
          x.content = x.content.replace(new RegExp('http://www.lagginout.com/wp-content/', 'g'), 'assets/images/')
          if ((x.content.includes('assets/images/') || x.content.includes('data:image/jpeg;base64')) && x.type === 'post') {
            x.content = x.content.replace(new RegExp('img src', 'g'), 'img width="100%" src')
            this.articles.push(x);
          }
        });
        this.articlesTop = _.orderBy(this.articles, ['date'], ['asc']).slice(0, 21);
        this.loaded = true;
      });
  }
  handleOpenArticle(index) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.body.style.overflowY = 'hidden';
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
    this.openArticle = this.articlesTop[index]
    this.articleOpen = true;
  }
  closeArticle(){
    document.body.style.overflowY = 'auto'
    document.getElementsByTagName('html')[0].style.overflow = "auto";
    this.articleOpen = false;
  }

}
