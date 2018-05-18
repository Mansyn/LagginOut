import { Component, OnInit } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { DomSanitizer } from '@angular/platform-browser'

import './shared/v1'
import { environment } from '../../environments/environment'
import { FeedObject } from './shared/feed.twitch'

@Component({
  selector: 'twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent {

  loaded: boolean = false
  post: any

  constructor(private http: Http, private sanitizer: DomSanitizer) { }

  doGET() {
    this.getHalls().subscribe((feed: FeedObject[]) => {
      this.post = feed['posts'][0]
      this.loaded = true
    })
  }

  getHalls() {
    let url = `${environment.twitch.apiRoot}kraken/feed/laggin_out/posts?client_id=` + environment.twitch.clientId
    return this.http.get(url).map((res: Response) => res.json())
  }

  sanURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.post.body);
  }
}
