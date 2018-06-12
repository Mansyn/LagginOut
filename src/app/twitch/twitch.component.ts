import { Component, OnInit } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http'

import { FeedObject, Post } from './shared/feed.twitch'
import { Observable } from 'rxjs';
import { TwitchApiService } from './shared/twitch-api.service';

@Component({
  selector: 'twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent implements OnInit {

  feed$: Observable<FeedObject>

  constructor(private twitchApiService: TwitchApiService) { }

  ngOnInit() {
    this.feed$ = this.getFeed()
  }

  getFeed(): Observable<FeedObject> {
    return this.twitchApiService.getFeed('laggin_out')
  }
}
