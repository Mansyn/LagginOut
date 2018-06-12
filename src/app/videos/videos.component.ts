import { Component, OnInit } from '@angular/core';
//import { SSL_OP_NO_TLSv1_1 } from 'constants';

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  playLists = []
  playListURLs = []
  videos = []
  viewAll: boolean
  viewPL: string
  pl1 = []
  pl2 = []
  pl3 = []
  selectedPlaylist
  constructor() { }

  ngOnInit() {
    this.getPlayLists()
    this.getVideos()
    this.viewAll = true
  }

  getPlayLists() {
    let response = (this.httpGet("https://content.googleapis.com/youtube/v3/playlists?channelId=UC_aGjq9YxYM4NLltfyugkDQ&maxResults=50&part=snippet&key=AIzaSyBEfu_6T84F1x2w-sg8SOy9UJoIKaUtWg4"))
    let yt = JSON.parse(response)
    this.playLists = yt.items
    for (let i = 0; i < this.playLists.length; i++) {
      if (this.playLists[i].snippet.title === 'Laggin Out Podcast' ||
        this.playLists[i].snippet.title === 'Killing it After Dark' ||
        this.playLists[i].snippet.title === 'Noob’s Guide'
      ) {
        this.getPlayListItems(this.playLists[i].snippet.title, this.playLists[i].id)
        this.playListURLs.push(this.getHref(this.playLists[i].snippet.thumbnails.default.url, this.playLists[i].id))
      } else {
        this.playLists.splice(i, 1)
        i--
      }
    }
    this.playListURLs = this.playListURLs.reverse()
  }

  httpGet(Url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", Url, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  getHref(Url, id) {
    let pathsection = Url.replace("https://i.ytimg.com/vi/", '')
    pathsection = pathsection.replace("/default.jpg", '')
    pathsection = 'https://www.youtube.com/watch?v=' + pathsection + '&list=' + id
    return pathsection
  }

  getPlayListItems(title, id) {
    let response = (this.httpGet('https://www.googleapis.com/youtube/v3/playlistItems?channelId=UC_aGjq9YxYM4NLltfyugkDQ&maxResults=25&part=snippet,contentDetails&playlistId=' + id + '&key=AIzaSyBEfu_6T84F1x2w-sg8SOy9UJoIKaUtWg4'))
    let listItem = JSON.parse(response)
    for (let i = 0; i < listItem.items.length; i++) {
      if (title === 'Laggin Out Podcast') {
        this.pl1.push(listItem.items[i])
      } else if (title === 'Killing it After Dark') {
        this.pl2.push(listItem.items[i])
      } else if (title === 'Noob’s Guide') {
        this.pl3.push(listItem.items[i])
      }
    }
  }

  getVideos() {
    let response = this.httpGet('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UC_aGjq9YxYM4NLltfyugkDQ&maxResults=26&key=AIzaSyBEfu_6T84F1x2w-sg8SOy9UJoIKaUtWg4')
    let yt = JSON.parse(response)
    for (let i = 0; i < yt.items.length; i++) {
      let dt = yt.items[i].snippet.publishedAt
      dt = new Date(dt)
      yt.items[i].snippet.publishedAt = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear()
     
      if (yt.items[i].snippet.title.match(/\(([^)]+)\)/)) {
        yt.items[i].series = yt.items[i].snippet.title.match(/\(([^)]+)\)/)[1]
        yt.items[i].snippet.title = yt.items[i].snippet.title.replace((/\(([^)]+)\)/), '')
      }
      if (yt.items[i].snippet.title === 'Diablo') {
        delete yt.items[i]
        // ++i
      }
    }
    const temp = []
    for (let i = 0; i < yt.items.length; i++) {
      if (yt.items[i]) {
        temp.push(yt.items[i])
      }
    }
    this.videos = temp
  }

  handleVidsNavigation(x) {
    if (x === 'All') {
      this.viewAll = true
    } else {
      this.viewAll = false
      switch(x){
        case 'Laggin Out Podcast':
          this.selectedPlaylist = this.pl1
          break
        case 'Killing it After Dark':
          this.selectedPlaylist = this.pl2
          break
        case "Noob's Guide":
          this.selectedPlaylist = this.pl3
          break
        default:
          this.selectedPlaylist = this.pl1
      }
    }
  }
}
