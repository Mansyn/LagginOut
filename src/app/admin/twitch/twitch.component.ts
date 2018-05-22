import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'
import { TwitchService } from '../../twitch/shared/twitch.service'
import { TwitchStreamer } from '../../twitch/shared/streamer'
import { AngularFireList } from 'angularfire2/database'
import { Observable } from '@firebase/util';

@Component({
  selector: 'admin-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class AdminTwitchStreamsComponent implements AfterViewInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>()

  public streamers: TwitchStreamer[]

  constructor(private twitchService: TwitchService) {
    // this.twitchService.addStreamer({
    //   id: 'tessachka',
    //   name: 'Tessachka',
    //   banner: 'https://static-cdn.jtvnw.net/jtv_user_pictures/tessachka-profile_banner-b156ae0c68cc77d5-480.png'
    // })
  }

  ngAfterViewInit() {
    this.twitchService.getStreamers()
      .snapshotChanges()
      .takeUntil(this.destroy$)
      .subscribe((data) => {
        let streamers = [];
        data.forEach((element) => {
          var e = element.payload.toJSON();
          e['$key'] = element.key;
          streamers.push(e as TwitchStreamer);
        });
        this.streamers = streamers
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
