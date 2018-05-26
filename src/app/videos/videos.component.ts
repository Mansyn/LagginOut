import { Component, OnInit } from '@angular/core';

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
        this.getPlayListItems(this.playLists[i].id)
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

  getPlayListItems(x) {
    let response = (this.httpGet('https://www.googleapis.com/youtube/v3/playlistItems?channelId=UC_aGjq9YxYM4NLltfyugkDQ&maxResults=25&part=snippet,contentDetails&playlistId='+x+'&key=AIzaSyBEfu_6T84F1x2w-sg8SOy9UJoIKaUtWg4'))
    console.log(response)
  }

  getVideos() {
    let response = this.httpGet('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UC_aGjq9YxYM4NLltfyugkDQ&maxResults=15&key=AIzaSyBEfu_6T84F1x2w-sg8SOy9UJoIKaUtWg4')
    let yt = JSON.parse(response)
    for (let i = 0; i < yt.items.length; i++) {
      let dt = yt.items[i].snippet.publishedAt
      dt = new Date(dt)
      yt.items[i].snippet.publishedAt = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear()
      if ( yt.items[i].snippet.title.match(/\(([^)]+)\)/)) {
        yt.items[i].series =  yt.items[i].snippet.title.match(/\(([^)]+)\)/)[1]
        yt.items[i].snippet.title =  yt.items[i].snippet.title.replace((/\(([^)]+)\)/), '')
      }
    }
    this.videos = yt.items
  }

  handleVidsNavigation(x) {
    console.log(x)
    if(x === 'All') {
      this.viewAll = true
    } else {
      this.viewAll = false
      console.log(x)
    }
  }

  fake() {
    const thing =  {
 "kind": "youtube#playlistItemListResponse",
 "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/yyrjS4P8El2t77U-m1vaXJGc1kQ\"",
 "nextPageToken": "CBkQAA",
 "pageInfo": {
  "totalResults": 162,
  "resultsPerPage": 25
 },
 "items": [
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/ZKNKmk3g5gwz9sXby0S9d2_wsN4\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy4yMkNBN0M4QUJEQzYxMjA3",
   "snippet": {
    "publishedAt": "2018-05-24T15:42:35.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Reaction Video Triple Feature! (LOP: S06)",
    "description": "Chief and Zombie take requests from the staff and react to a few....interesting videos. (Links below)\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.\n\nvideo:  “[SFM] We Like to Party”\nYouTuber:  an0moose\nlink:  https://youtu.be/b8HO6hba9ZE\n\nvideo:  “Rappin' for Jesus”\nYoutuber:  Brian Spinney\nlink:  https://youtu.be/Kppx4bzfAaE\n\nvideo:  “Rick and Morty Trolling on Fortnite! \nYouTuber:  GreatGriefers\nlink:  https://youtu.be/6VoygyaKhUc",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/6EMRH9Z2ATg/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/6EMRH9Z2ATg/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/6EMRH9Z2ATg/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/6EMRH9Z2ATg/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/6EMRH9Z2ATg/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 0,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "6EMRH9Z2ATg"
    }
   },
   "contentDetails": {
    "videoId": "6EMRH9Z2ATg",
    "videoPublishedAt": "2018-05-24T15:42:34.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/JS2vrqGaBrJD6E8WQhZ0E8emnYQ\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5BNjBCMUFCN0Q5QzUyMjlG",
   "snippet": {
    "publishedAt": "2018-05-17T21:09:28.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Zombie Caught on Cam (LOP: S06)",
    "description": "While preparing for the show Zombie thought she would do her version of Lip Sync Battle. Little did she know that Chieftain had remote accessed her computer and pulled the footage. See what Zombie didn't want you to watch! REVENGE!!!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.\n\nmusic credit: \nHaddaway\nWhat is Love\nCoconut Records",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/nPuqWeOqzVU/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/nPuqWeOqzVU/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/nPuqWeOqzVU/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/nPuqWeOqzVU/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/nPuqWeOqzVU/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 1,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "nPuqWeOqzVU"
    }
   },
   "contentDetails": {
    "videoId": "nPuqWeOqzVU",
    "videoPublishedAt": "2018-05-17T21:09:27.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/9M-48wdLqTBihwO_TEUd27etF1A\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy4wOTkzRUNGQkU5QzI1QTA3",
   "snippet": {
    "publishedAt": "2018-05-10T23:32:37.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Behind The Scenes of the Laggin' Out Podcast (LOP: S06)",
    "description": "A rare look at the Laggin' Out Podcast that you have not EVER seen. Zombie let her camera roll unbeknownst to the rest of the crew. Sit back and enjoy!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/FTw5CyyiMy4/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/FTw5CyyiMy4/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/FTw5CyyiMy4/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/FTw5CyyiMy4/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/FTw5CyyiMy4/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 2,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "FTw5CyyiMy4"
    }
   },
   "contentDetails": {
    "videoId": "FTw5CyyiMy4",
    "videoPublishedAt": "2018-05-10T23:32:36.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/WZMOpQKfEW9JTj-848AK_vrcu8Q\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5DQzY2RDZFRUQyRDlDQkMw",
   "snippet": {
    "publishedAt": "2018-05-03T17:50:57.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Far Cry 5 Review with Moabete II (LOP: S06)",
    "description": "Watch the exciting conclusion of Moabete's Far Cry 5 Review! Did he miss anything or was he right on the money? Let us know in the comment section!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/sqnCpmyxnp8/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/sqnCpmyxnp8/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/sqnCpmyxnp8/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/sqnCpmyxnp8/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/sqnCpmyxnp8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 3,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "sqnCpmyxnp8"
    }
   },
   "contentDetails": {
    "videoId": "sqnCpmyxnp8",
    "videoPublishedAt": "2018-05-03T17:50:56.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/8gC3jT3DGQ4Ec9zfsLBoV_GSBto\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy43Q0UyODJENjc3NDRCODU0",
   "snippet": {
    "publishedAt": "2018-04-26T17:11:50.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Moabete's Far Cry 5 Rant! (LOP: S06)",
    "description": "Moabete and Zombie talk Far Cry 5. Are they far off or right on the money? Comment and let us know below!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/_QP9nt4Dbxc/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/_QP9nt4Dbxc/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/_QP9nt4Dbxc/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/_QP9nt4Dbxc/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/_QP9nt4Dbxc/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 4,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "_QP9nt4Dbxc"
    }
   },
   "contentDetails": {
    "videoId": "_QP9nt4Dbxc",
    "videoPublishedAt": "2018-04-26T17:11:49.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/yfKDZvQyB_EmjZENwVVn4hEVlLM\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy4yM0YxNkQ4MTExRjg4RUI2",
   "snippet": {
    "publishedAt": "2018-04-19T21:35:04.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Rampage and Chief's Top 5 (LOP: S06)",
    "description": "Will Rampage be a flop or a blockbuster?  Is Chieftain out of touch with his Top 5?  Comment below and let us know!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/0pNkcewgufI/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/0pNkcewgufI/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/0pNkcewgufI/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/0pNkcewgufI/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/0pNkcewgufI/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 5,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "0pNkcewgufI"
    }
   },
   "contentDetails": {
    "videoId": "0pNkcewgufI",
    "videoPublishedAt": "2018-04-19T21:35:03.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/ZfJS1csTok4rT2k3QkxFw55ErX0\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy4zQTkyMjEwN0U0QkU3RDg5",
   "snippet": {
    "publishedAt": "2018-04-13T15:02:41.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "The Not Ready Player One Top 5 (LOP: S06)",
    "description": "Everyone has watched Ready, Player One so we thought that was a waste of your time to do a review. So here are our picks of our Top favorite video game themed movies. Do you agree?\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/tfhBctQx1gs/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/tfhBctQx1gs/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/tfhBctQx1gs/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/tfhBctQx1gs/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/tfhBctQx1gs/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 6,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "tfhBctQx1gs"
    }
   },
   "contentDetails": {
    "videoId": "tfhBctQx1gs",
    "videoPublishedAt": "2018-04-13T15:02:39.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/YFMDm-Jox2z_J-DMOCR3oknr8ss\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5DNzNDRDE1NzhGODQzODI2",
   "snippet": {
    "publishedAt": "2018-04-05T20:11:25.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "The Biggest E-Sports Stadium? (LOP: S06)",
    "description": "Are we ready for the biggest E-Sports Stadium in the U.S.?\n\nSource: \nhttp://www.arlington-tx.gov/news/2018/03/14/arlington-site-proposed-largest-esports-stadium-u-s/\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/_Nfw5O4B5W8/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/_Nfw5O4B5W8/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/_Nfw5O4B5W8/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/_Nfw5O4B5W8/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/_Nfw5O4B5W8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 7,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "_Nfw5O4B5W8"
    }
   },
   "contentDetails": {
    "videoId": "_Nfw5O4B5W8",
    "videoPublishedAt": "2018-04-05T20:11:24.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/zKSuX3IQBS9CQFen19OX9HQW2zU\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy43MzBFRTZDMUM3OTY2RjQ4",
   "snippet": {
    "publishedAt": "2018-03-30T21:28:30.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Our Take on Street Fighter's 30 Anniversary (LOP: S06)",
    "description": "The gang discusses Street Fighter's 30 Anniversary announcement.\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/cvgWI19UK1Y/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/cvgWI19UK1Y/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/cvgWI19UK1Y/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/cvgWI19UK1Y/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/cvgWI19UK1Y/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 8,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "cvgWI19UK1Y"
    }
   },
   "contentDetails": {
    "videoId": "cvgWI19UK1Y",
    "videoPublishedAt": "2018-03-30T21:28:29.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/I5VAt8zxtdwAlKjdkbPNBq4uUJA\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy4xREVBMTg1ODg1M0JCQUE1",
   "snippet": {
    "publishedAt": "2018-03-22T23:16:55.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Funny Siege Chimera UPDATE Finale! (LOP S:06)",
    "description": "The final FUNNY, installment on our review of the Tom Clancy's Siege: Operation Chimera!\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/OSfMi5h0adg/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/OSfMi5h0adg/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/OSfMi5h0adg/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/OSfMi5h0adg/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/OSfMi5h0adg/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 9,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "OSfMi5h0adg"
    }
   },
   "contentDetails": {
    "videoId": "OSfMi5h0adg",
    "videoPublishedAt": "2018-03-22T23:16:54.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/BzTHsfrNX6ifqVztCRfmnGYUcmY\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5CNzAzQzRDMkI3QThEQzZB",
   "snippet": {
    "publishedAt": "2018-03-15T01:14:44.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Operation Chimera: Year 3 UPDATE",
    "description": "The BEST Review of Operation Chimera that you will ever see! Check it out!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/Spiy1AJN_2o/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/Spiy1AJN_2o/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/Spiy1AJN_2o/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/Spiy1AJN_2o/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/Spiy1AJN_2o/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 10,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "Spiy1AJN_2o"
    }
   },
   "contentDetails": {
    "videoId": "Spiy1AJN_2o",
    "videoPublishedAt": "2018-03-15T01:14:43.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/21--n9Ro1gdm7nAjdvfiDVlotYA\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy45QzM0OUZCRDUyMTgwREVG",
   "snippet": {
    "publishedAt": "2018-03-08T21:43:15.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Can Twitch Stop Trollers?",
    "description": "Is Twitch doing enough or have gone too far?\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/5tTloEURLp4/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/5tTloEURLp4/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/5tTloEURLp4/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/5tTloEURLp4/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/5tTloEURLp4/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 11,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "5tTloEURLp4"
    }
   },
   "contentDetails": {
    "videoId": "5tTloEURLp4",
    "videoPublishedAt": "2018-03-08T21:43:14.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/R6cW64wsOUSYnYHDYln1W730xOE\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5DMkM0MjQ3OTgwQzBCMEZB",
   "snippet": {
    "publishedAt": "2018-03-01T20:53:54.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Has Twitch Gone Too Far?",
    "description": "What do you think of Twitch's updated policies?\nAre they \"helping\" or \"hindering\" with their updated policies?\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/SXeGFDsNfZM/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/SXeGFDsNfZM/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/SXeGFDsNfZM/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/SXeGFDsNfZM/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/SXeGFDsNfZM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 12,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "SXeGFDsNfZM"
    }
   },
   "contentDetails": {
    "videoId": "SXeGFDsNfZM",
    "videoPublishedAt": "2018-03-01T20:53:53.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/Bv3Fb2XdVtuKyIYUganDbCfaWbw\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5BRjY4NjdBRjA5RTdCMUMx",
   "snippet": {
    "publishedAt": "2018-02-22T17:49:50.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Who is Scampering Panda? (LOP: S06)",
    "description": "The gang welcomes Star Streamer, the sultry, Scampering Panda where she answers all your questions!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/ZqdZ6OF_1s0/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/ZqdZ6OF_1s0/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/ZqdZ6OF_1s0/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/ZqdZ6OF_1s0/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/ZqdZ6OF_1s0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 13,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "ZqdZ6OF_1s0"
    }
   },
   "contentDetails": {
    "videoId": "ZqdZ6OF_1s0",
    "videoPublishedAt": "2018-02-22T17:49:49.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/oOROUZiTs_Av6EjEcHXdxY81Dzw\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy41RjU0OTVCQThDNUUwQzBD",
   "snippet": {
    "publishedAt": "2018-02-15T01:53:34.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Tri-Bar Awards Finale! (LOP: S06)",
    "description": "In this finale, we reveal the winners and the Best Single Player, Multiplayer, and Game of the Year!\n\n• DONATE: patreon.com/lagginout \n• SHOP: designbyhumans.com/shop/lagginout \n\nSocial Media: \n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• YouTube: youtube.com/lagginout \n• Instagram: @lagginoutent \n• Google+: google.com/+Lagginout \n• SnapChat: lagginoutent  \n• Website: lagginout.com\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/FK455y6lyi0/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/FK455y6lyi0/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/FK455y6lyi0/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/FK455y6lyi0/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/FK455y6lyi0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 14,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "FK455y6lyi0"
    }
   },
   "contentDetails": {
    "videoId": "FK455y6lyi0",
    "videoPublishedAt": "2018-02-15T01:53:32.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/lIWSgsSxm_tHV780-PtEoofwDlE\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5EREU0QjZERDMzRDBGNTMz",
   "snippet": {
    "publishedAt": "2018-02-04T00:07:39.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Tri-Bar Gaming Awards (LOP: S06)",
    "description": "Welcome to the 5th Annual Tri-Bar Awards! Watch as Chief, Moabete, and Zomb13_K1ll3r give kudos to the best and worst in gaming! (Part 1)\n\n• DONATE: patreon.com/lagginout \n• MERCH:  designbyhumans.com/shop/lagginout \n\n• Facebook: facebook.com/LagginOut \n• Twitter: twitter.com/lagginout \n• Twitch: twitch.tv/laggin_out \n• Instagram @lagginoutent \n• Google+: google.com/+Lagginout \nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/3UKoAgtjtRc/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/3UKoAgtjtRc/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/3UKoAgtjtRc/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/3UKoAgtjtRc/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/3UKoAgtjtRc/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 15,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "3UKoAgtjtRc"
    }
   },
   "contentDetails": {
    "videoId": "3UKoAgtjtRc",
    "videoPublishedAt": "2018-02-07T23:00:01.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/7O_7WResvOLFicJktltH6_LN0zA\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5CNEFEOUNDRUMzMjVGMjc2",
   "snippet": {
    "publishedAt": "2018-01-19T15:25:47.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Tri-Bar Gaming Award Nominees Are..",
    "description": "Here are the nominees for the 2018 Tri-Bar Game Awards:\nBest Independent Game, Best Developer, Tri-Hard Award, Best Multiplayer, Best Single Player, and Game of the Year!\n\n• DONATE HERE: patreon.com/lagginout\n• SHOP HERE: designbyhumans.com/shop/lagginout\n• Facebook: facebook.com/LagginOut\n• Twitter: twitter.com/lagginout\n• Twitch: twitch.tv/laggin_out\n• Instagram @lagginoutent\n• Google+:  google.com/+Lagginout \n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/BJJwJpySBoE/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/BJJwJpySBoE/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/BJJwJpySBoE/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/BJJwJpySBoE/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/BJJwJpySBoE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 16,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "BJJwJpySBoE"
    }
   },
   "contentDetails": {
    "videoId": "BJJwJpySBoE",
    "videoPublishedAt": "2018-01-19T17:00:00.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/VlMfABMx2A6VoeIbSLwhFrUKinU\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy45NDIzMEVBNjk5NTFGRDZC",
   "snippet": {
    "publishedAt": "2017-12-28T20:51:29.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Ask Zomb13K1LL3r ANYTHING! (LOP: S05)",
    "description": "Our special twist on the same old boring Q and A.  Watch as the Queen Bee of Laggin' Out answers all your questions!\n\n• DONATE HERE: https://www.patreon.com/lagginout\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut\n• Facebook: https://www.facebook.com/LagginOut\n• Twitter: https://twitter.com/lagginout\n• Twitch: http://www.twitch.tv/laggin_out\n• Instagram @lagginoutent\n• Google+ google.com/+Lagginout \n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/qBvTDuT9MKQ/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/qBvTDuT9MKQ/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/qBvTDuT9MKQ/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/qBvTDuT9MKQ/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/qBvTDuT9MKQ/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 17,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "qBvTDuT9MKQ"
    }
   },
   "contentDetails": {
    "videoId": "qBvTDuT9MKQ",
    "videoPublishedAt": "2017-12-28T23:30:00.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/KyA96pnh0UvG1OCK3ohIUSAkwmA\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5CODNEOTFERDNCQjU2ODhE",
   "snippet": {
    "publishedAt": "2017-12-15T18:16:48.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Star Wars: The Last Jedi Review (SPOLIERS) (LOP: S05)",
    "description": "Watch our review of Star Wars: the Last Jedi.\n\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut\n• Patreon: https://www.patreon.com/lagginout \n• Facebook: https://www.facebook.com/LagginOut \n• Twitter: https://twitter.com/lagginout \n• Twitch: http://www.twitch.tv/laggin_out \n• Instagram @lagginoutent\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/X9E7WlmWe5Y/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/X9E7WlmWe5Y/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/X9E7WlmWe5Y/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/X9E7WlmWe5Y/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/X9E7WlmWe5Y/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 18,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "X9E7WlmWe5Y"
    }
   },
   "contentDetails": {
    "videoId": "X9E7WlmWe5Y",
    "videoPublishedAt": "2017-12-15T19:44:30.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/sE19a9uIPZqvMcNbG0l-2A9Jq_c\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5DNTU3ODQ4ODAzMjFERTI1",
   "snippet": {
    "publishedAt": "2017-12-12T19:28:07.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "REACTION TO TARA BABCOCK (LOP: S05)",
    "description": "Chieftain reacts to Tara Babcock playing Dark Souls 3 and tries not to be creepy.\n• Patreon: https://www.patreon.com/lagginout\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut \n• Facebook: https://www.facebook.com/LagginOut \n• Twitter: https://twitter.com/lagginout \n• Twitch: http://www.twitch.tv/laggin_out \n• Instagram @lagginoutent \n• Google+ google.com/+Lagginout \n\nSource:  https://www.youtube.com/watch?v=6Y8Ay8rOh9I\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/U-_4NXlxQ_4/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/U-_4NXlxQ_4/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/U-_4NXlxQ_4/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/U-_4NXlxQ_4/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/U-_4NXlxQ_4/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 19,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "U-_4NXlxQ_4"
    }
   },
   "contentDetails": {
    "videoId": "U-_4NXlxQ_4",
    "videoPublishedAt": "2017-12-20T14:00:05.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/pSbC_2IGowUxsmnxX4IoPcnMJhY\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy4wMTIyMTBBMTA3RDUxNjlD",
   "snippet": {
    "publishedAt": "2017-12-11T02:10:24.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Dear EA Haters (LOP: S05)",
    "description": "Chief breaks down why gamers are partially to blame for EA's micro-tranaction debacle. \n\n• DONATE HERE: https://www.patreon.com/lagginout\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut \n• Facebook: https://www.facebook.com/LagginOut \n• Twitter: https://twitter.com/lagginout \n• Twitch: http://www.twitch.tv/laggin_out \n• Instagram @lagginoutent • Google+ google.com/+Lagginout \n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/nGHJ-poYdsY/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/nGHJ-poYdsY/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/nGHJ-poYdsY/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/nGHJ-poYdsY/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/nGHJ-poYdsY/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 20,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "nGHJ-poYdsY"
    }
   },
   "contentDetails": {
    "videoId": "nGHJ-poYdsY",
    "videoPublishedAt": "2017-12-13T23:00:09.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/MNfTaa2JAIvQbtoibqjc0_FnDpM\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy40Q0JERDMxNzcwNTk1M0Y0",
   "snippet": {
    "publishedAt": "2017-12-05T16:02:52.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Chief Reacts to Pennywise (LOP: S05)",
    "description": "Chief reacts to:\nPENNYWISE VOICE TROLLING ON CALL OF DUTY WW2.\n\n\n• DONATE HERE: https://www.patreon.com/lagginout\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut \n• Facebook: https://www.facebook.com/LagginOut \n• Twitter: https://twitter.com/lagginout \n• Twitch: http://www.twitch.tv/laggin_out \n• Instagram @lagginoutent \n• Google+ google.com/+Lagginout \n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/bNx8afEjXok/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/bNx8afEjXok/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/bNx8afEjXok/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/bNx8afEjXok/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/bNx8afEjXok/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 21,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "bNx8afEjXok"
    }
   },
   "contentDetails": {
    "videoId": "bNx8afEjXok",
    "videoPublishedAt": "2017-12-06T23:00:02.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/zi4GofXGYpVgvVnVPvYFyVxpKRA\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy40NTBGRDE5MDg2Q0NEODI4",
   "snippet": {
    "publishedAt": "2017-11-23T02:27:38.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "CHIEF AND STORM REACT: ASK THE WATCHER (LOP: S05)",
    "description": "Chief and Storm react to \"Ask the Watcher\".\n\n• DONATE HERE: https://www.patreon.com/lagginout\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut \n• Facebook: https://www.facebook.com/LagginOut \n• Twitter: https://twitter.com/lagginout \n• Twitch: http://www.twitch.tv/laggin_out \n• Instagram @lagginoutent \n• Google+ google.com/+Lagginout \n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/_twVXs14lTE/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/_twVXs14lTE/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/_twVXs14lTE/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/_twVXs14lTE/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/_twVXs14lTE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 22,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "_twVXs14lTE"
    }
   },
   "contentDetails": {
    "videoId": "_twVXs14lTE",
    "videoPublishedAt": "2017-11-23T14:00:02.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/YRtB_JxpRV4QJv4UzWmOvDWx5V4\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy42NjBGMkRFNDcwMjM2NzYx",
   "snippet": {
    "publishedAt": "2017-11-12T22:14:41.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "EPIC RAP BATTLES IN HISTORY REACTION VIDEO (LOP: S05 UNCENSORED)",
    "description": "DARTH VADAR VS. Hitler 1-3 reacted by Unisol and Chieftain\n\n• DONATE HERE: https://www.patreon.com/lagginout\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut \n• Facebook: https://www.facebook.com/LagginOut \n• Twitter: https://twitter.com/lagginout \n• Twitch: http://www.twitch.tv/laggin_out \n• Instagram @lagginoutent \n• Google+ google.com/+Lagginout \n\nMusic by:\nHeavy-Handed-Beat_60_DNB016101\nAlbum:\nCraig Austin (SOCAN)\nCatalog:\nAudio Hero\nLabel:\nAudio Hero\nPublisher:\nS.I. Publishing (SOCAN)\nAudio Hero - Download Royalty Free Music & Sound Effects Genre:\nSolo Instrument\n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/cDOT_TTtfrA/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/cDOT_TTtfrA/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/cDOT_TTtfrA/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/cDOT_TTtfrA/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/cDOT_TTtfrA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 23,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "cDOT_TTtfrA"
    }
   },
   "contentDetails": {
    "videoId": "cDOT_TTtfrA",
    "videoPublishedAt": "2017-11-15T14:00:05.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/7AgwRVk_lWQbxHpWdHzhE9GtKKc\"",
   "id": "UEwxaEFqRTIyUDlsNTVndHNzY29xUzB3V1o0U2lQUldpVy5BNTRGQTE1QjY2NUE5NTAz",
   "snippet": {
    "publishedAt": "2017-11-02T17:04:38.000Z",
    "channelId": "UC_aGjq9YxYM4NLltfyugkDQ",
    "title": "Copy Paste: Call of Duty WWII Review (LOP: S03 CENSORED)",
    "description": "The gang reviews Call of Duty: WWII OR THE UNCENSORED SHOW AT  https://www.patreon.com/posts/copy-paste-call-15153349\n\n\n• DONATE HERE: https://www.patreon.com/lagginout\n• SHOP HERE: https://shop.spreadshirt.com/LagginOut \n• Facebook: https://www.facebook.com/LagginOut \n• Twitter: https://twitter.com/lagginout \n• Twitch: http://www.twitch.tv/laggin_out \n• Instagram @lagginoutent \n• Google+ google.com/+Lagginout \n\nCopyright Disclaimer, Under Section 107 of the Copyright Act 1976, allowance is made for 'fair use' for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. \n\n\nCOD, Call of Duty WW II, WW2, Call of Duty world war 2 leaked, Call of Duty world war 2 leaks, Call of Duty world war 2 multiplayer leaks, Call of Duty world war 2 gameplay,  Call of Duty WW2,  Call of Duty WW2 Leak, Call of Duty WW2  Zombies Leak, Call of Duty WW2 all weapons,  COD WWII, COD WWII Review,  Call of Duty WW2 Review,\nlaggin out, lagging out, lagginout, Laggin Out Podcast, Lagging Out Podcast, video games, video game review, Chieftain, Storm, ZombieKiller, Zombie Killer,",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/mh8edByeHkk/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/mh8edByeHkk/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/mh8edByeHkk/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/mh8edByeHkk/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/mh8edByeHkk/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Laggin Out Entertainment",
    "playlistId": "PL1hAjE22P9l55gtsscoqS0wWZ4SiPRWiW",
    "position": 24,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "mh8edByeHkk"
    }
   },
   "contentDetails": {
    "videoId": "mh8edByeHkk",
    "videoPublishedAt": "2017-11-03T04:00:01.000Z"
   }
  }
 ]
}

  }
}
