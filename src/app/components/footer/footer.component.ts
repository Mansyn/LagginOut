import { Component, OnInit } from '@angular/core'
import { SocialService } from '../../social/social.service'
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMediaObservable: Observable<any[]>

  constructor(private db: AngularFireDatabase, private _links: SocialService) { }

  ngOnInit() {
    this.socialMediaObservable = this.getData('/links')
  }
  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getIcon(x) {
    const list = [
      { name: 'Facebook', value: '&#xe905;' },
      { name: 'Twitter', value: '&#xe904;' },
      { name: 'Twitch', value: '&#xe903;' },
      { name: 'YouTube', value: '&#xe902;' },
      { name: 'Instagram', value: '&#xe901;' },
      { name: 'Google+', value: '&#xe900;' },
      { name: 'Snapchat', value: '&#xe906;' }
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