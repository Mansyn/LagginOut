import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Http, Response } from '@angular/http'
import { FeedObject } from './feed.model'
import { map } from 'rxjs/operators'

@Injectable()
export class TwitchApiService {
    private TWITCH_API_KEY: string = environment.twitch.clientId;
    private TWITCH_API_ROOT: string = environment.twitch.apiRoot;

    constructor(private http: Http) { }

    getFeed(user) {
        let params: string = `client_id=${this.TWITCH_API_KEY}`
        let queryUrl: string = `${this.TWITCH_API_ROOT}kraken/feed/${user}/posts?${params}`

        return this.http.get(queryUrl).pipe(
            map((response: Response) => {
                return (<FeedObject>response.json())
            }))
    }
}
