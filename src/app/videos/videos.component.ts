import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { VideosService } from './shared/videos.service';

import { Video } from './shared/Video';

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Video[];
  selectedVideo: any[];
  loaded: boolean = false;

  constructor(private router: Router, private _videosService: VideosService, public dialog: MatDialog) { }

  ngOnInit() {
    var x = this._videosService.getVideos();
    x.snapshotChanges().subscribe(data => {
      this.videos = [];
      data.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.videos.push(y as Video);
      });
      this.loaded = true;
      this.selectedVideo = [];
    });
  }

  onVideoClick(value: any) {
    if (this.selectedVideo.indexOf(value) == -1) {
      this.selectedVideo.push(value);
    } else {
      this.selectedVideo.splice(value, 1);
    }
  }

  edit() {
    this.router.navigate(["/video/edit/" + this.selectedVideo[0].$key.toString()]);
  }

  remove() {
    for (var video in this.selectedVideo) {
      this._videosService.deleteVideo(this.selectedVideo[video].$key);
    }
  }

  removeDialog(): void {
    let dialogRef = this.dialog.open(RemoveVideoDialog, {
      width: '350px',
      data: { title: this.selectedVideo[0].title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this._videosService.deleteVideo(this.selectedVideo[0].$key);
      }
    });
  }
}

@Component({
  selector: 'remove-dialog',
  template: `<h1 mat-dialog-title>Delete {{data.title}}</h1>
             <div mat-dialog-content>
               <p>Are you sure you want to delete this video?</p>
             </div>
             <div mat-dialog-actions align="end">
               <button mat-button [mat-dialog-close]="false">Cancel</button>
               <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
             </div>`
})
export class RemoveVideoDialog {

  constructor(
    public dialogRef: MatDialogRef<RemoveVideoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}