import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vids',
  templateUrl: './vids.component.html',
  styleUrls: ['./vids.component.scss']
})
export class VidsComponent implements OnInit {
  playLists = []
  playListURLs = []
  videos = []
  constructor() { }

  ngOnInit() {
    this.getPlayLists()
    this.getVideos()
  }

  getPlayLists() {
    let response = (this.httpGet("https://content.googleapis.com/youtube/v3/playlists?channelId=UC_aGjq9YxYM4NLltfyugkDQ&maxResults=50&part=snippet&key=AIzaSyBEfu_6T84F1x2w-sg8SOy9UJoIKaUtWg4"))
    let yt = JSON.parse(response)
    this.playLists = yt.items
    for(let i = 0; i < this.playLists.length; i++) {
      if(this.playLists[i].snippet.title === 'Advertisements' || this.playLists[i].snippet.title === 'Diablo') {
        this.playLists.splice(i, 1)
      }
      this.playListURLs.push(this.getHref(this.playLists[i].snippet.thumbnails.default.url, this.playLists[i].id))
    }
  }

  httpGet(Url)
  {
     var xmlHttp = new XMLHttpRequest();
     xmlHttp.open( "GET", Url, false ); // false for synchronous request
     xmlHttp.send( null );
     return xmlHttp.responseText;
  }

  getHref(Url, id) {
    let pathsection = Url.replace("https://i.ytimg.com/vi/", '')
    pathsection = pathsection.replace("/default.jpg", '')
    pathsection = 'https://www.youtube.com/watch?v=' + pathsection + '&list=' + id
    return pathsection
  }

  getVideos() {
    let response = this.httpGet('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UC_aGjq9YxYM4NLltfyugkDQ&maxResults=15&key=AIzaSyBEfu_6T84F1x2w-sg8SOy9UJoIKaUtWg4')
    let yt = JSON.parse(response)
    console.log('getVideos()')
    for(let i = 0; i < yt.items.length; i++){
      let dt = yt.items[i].snippet.publishedAt
      console.log(i)
      dt = new Date(dt)
      console.log(dt)
      yt.items[i].snippet.publishedAt = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear()
    }
    this.videos = yt.items
  }
}
