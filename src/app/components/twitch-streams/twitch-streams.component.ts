import { Component, OnInit } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { DomSanitizer } from '@angular/platform-browser'

import '../../twitch/shared/v1'
import { environment } from '../../../environments/environment'
import { Endpoints } from '../../twitch/shared/endpoints.twitch'
import { StreamObject } from '../../twitch/shared/stream.twitch'

@Component({
  selector: 'twitch-streams',
  templateUrl: './twitch-streams.component.html',
  styleUrls: ['./twitch-streams.component.scss']
})
export class TwitchStreamsComponent implements OnInit {

  streamers: string[] = []
  liveStreaming: StreamObject

  constructor(private http: Http) {
    this.streamers.push('laggin_out') // need list of applicable streamers
  }

  ngOnInit() {
    this.getLiveStreams()
  }

  getLiveStreams() {
    this.getStreams().subscribe((response: StreamObject) => {
      this.liveStreaming = response
    })
  }

  getStreams() {
    let url = `${environment.twitch.apiRoot + Endpoints.streams}?client_id=` + environment.twitch.clientId + '&channel=' + this.streamers.join(',')
    return this.http.get(url).map((res: Response) => res.json())
  }

}
