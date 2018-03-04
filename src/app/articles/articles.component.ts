import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  options = [
    {value: 'Newest', viewValue: 'Newest'},
    {value: 'Oldest', viewValue: 'Oldest'},
    {value: 'Trending', viewValue: 'Trending'},
    {value: 'Popularity', viewValue: 'Popularity'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
