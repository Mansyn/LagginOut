import { Component, OnInit } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { DomSanitizer } from '@angular/platform-browser'
import { environment } from '../../../environments/environment'
import { Endpoints } from '../../twitch/shared/endpoints.twitch'
import { StreamObject } from '../../twitch/shared/stream.twitch'
import { TwitchStreamer } from '../../twitch/shared/streamer'
import { TwitchService } from '../../twitch/shared/twitch.service'

import '../../twitch/shared/v1'

@Component({
  selector: 'twitch-streams',
  templateUrl: './twitch-streams.component.html',
  styleUrls: ['./twitch-streams.component.scss']
})
export class TwitchStreamsComponent implements OnInit {

  streamers: any
  loaded: boolean = false
  liveStreaming: StreamObject

  constructor(
    private http: Http,
    private twitchService: TwitchService
  ) { }

  ngOnInit() {
    this.twitchService.getStreamers()
      .valueChanges()
      .subscribe((streamers) => {
        this.streamers = streamers
        this.getLiveStreams()
      })
  }

  getLiveStreams() {
    this.getStreams().subscribe((response: StreamObject) => {
      this.liveStreaming = response
      this.loaded = true
    })
  }

  getStreams() {
    let streamer_id = this.streamers.map(streamer => streamer.id)
    let url = `${environment.twitch.apiRoot + Endpoints.streams}?client_id=` + environment.twitch.clientId + '&channel=' + streamer_id.join(',')
    return this.http.get(url).map((res: Response) => res.json())
  }

}
