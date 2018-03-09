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
  options = [
    { value: 'Newest', viewValue: 'Newest' },
    { value: 'Oldest', viewValue: 'Oldest' },
    { value: 'Trending', viewValue: 'Trending' },
    { value: 'Popularity', viewValue: 'Popularity' }
  ];

  articles: Article[];
  articlesTop: Article[];
  loaded: boolean = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = [];
    this.articlesTop = [];
    this.articleService.getArticles()
      .snapshotChanges()
      .subscribe((data) => {
        let articles = [];
        data.forEach((element) => {
          var y = element.payload.toJSON();
          this.articles.push(y as Article);
        });
        this.articlesTop = _.orderBy(this.articles.slice(0, 15), ['date'], ['desc']);
        this.loaded = true;
      });
  }

}
