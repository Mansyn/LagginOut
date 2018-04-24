import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Social } from './social'
import { SocialService } from './social.service'
import { trigger, transition, animate, style } from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('600ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class SocialComponent implements OnInit {
  socialMediaObservable: Observable<any[]>
  showStats: boolean
  statState: string

  linkKey

  constructor(private db: AngularFireDatabase, private socialService: SocialService) { }

  ngOnInit() {
    this.socialMediaObservable = this.getData('/links')
    this.statState = 'Show'
  }
  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  handleShowStats() {
    this.showStats = this.showStats === true ? false : true;
    if(this.showStats) {
      this.statState = 'Hide'
    } else {
      this.statState = 'Show'
    }
  }

  getIcon(x) {
    // Google+    = &#xe900;
    // Instagram  = &#xe901;
    // YouTube    = &#xe902;
    // Twitch     = &#xe903;
    // Twitter    = &#xe904;
    // FaceBook   = &#xe905;
    // SnapChat   = &#xe906;

    const list = [
      {name: 'Facebook', value: '&#xe905;'},
      {name: 'Twitter', value: '&#xe904;'},
      {name: 'Twitch', value: '&#xe903;'},
      {name: 'YouTube', value: '&#xe902;'},
      {name: 'Instagram', value: '&#xe901;'},
      {name: 'Google+', value: '&#xe900;'},
      {name: 'Snapchat', value: '&#xe906;'}
    ]
    let icon
    for (let service of list) {
      if (service.name === x) {
        icon = service.value
      }
    }

    return icon

  }
}
