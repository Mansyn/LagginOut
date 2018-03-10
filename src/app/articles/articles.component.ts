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
  loaded: boolean = false;

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
          let x = (y as Article)
          console.log(x.type)
          x.content = x.content.replace(new RegExp('http://www.lagginout.com/wp-content/', 'g'), 'assets/images/')
          if (x.content.includes('assets/images/') && x.type === 'post') {
            this.articles.push(x);
          }
        });
        // for (let x = 0; x < filter.length; x++) {
        //   // console.log(filter[x].type)
        //   if (filter[x].status === 'inherit') {
        //     console.log(filter[x].id, filter[x].type)
        //     this.articles.push(filter[x] as Article);
        //   }
        // }
        this.articlesTop = _.orderBy(this.articles, ['date'], ['asc']).slice(0, 25);
        this.loaded = true;
      });
  }

}
