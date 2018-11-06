import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'
import { DomSanitizer } from '@angular/platform-browser'
import { map } from 'rxjs/operators'

import './shared/v1'
import { environment } from '../../environments/environment'
import { FeedObject } from './shared/feed.model'

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
    return this.http.get(url).pipe(
      map((response: Response) => response.json())
    );
  }

  sanURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.post.body);
  }
}
