import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatTabChangeEvent, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import _ from 'lodash';

import { AuthService } from '../core/auth.service';
import { VideosService } from '../videos/shared/videos.service';
import { Video } from '../videos/shared/video';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements AfterViewInit {

  @ViewChild(MatSort) video_sort: MatSort;
  @ViewChild(MatPaginator) video_paginator: MatPaginator;

  tabIndex = 0;
  video_displayedColumns = ['select', 'title', 'description', 'link'];
  video_dataSource = new MatTableDataSource<Video>();
  video_selection = new SelectionModel<Video>(true, []);

  constructor(public auth: AuthService, public dialog: MatDialog, public snackBar: MatSnackBar, private videosService: VideosService) { }

  ngAfterViewInit() {

    this.videosService.getVideos()
      .snapshotChanges()
      .subscribe(data => {
        let videos = [];
        data.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          videos.push(y as Video);
        });

        this.video_dataSource.data = videos;
      });
    this.video_dataSource.paginator = this.video_paginator;
    this.video_dataSource.sort = this.video_sort;
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabIndex = tabChangeEvent.index;
    console.log('tab => ', tabChangeEvent.index);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.video_dataSource.filter = filterValue;
  }

  videoDialog(isNew: boolean): void {
    let target = isNew ? (new Video) : this.video_selection.selected[0];

    let dialogRef = this.dialog.open(VideoDialog, {
      width: '450px',
      data: { video: target }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        if (isNew) {
          this.videosService.addVideo(result)
            .then((data) => {
              this.openSnackBar('Video Saved', 'OKAY');
            });
        } else {
          this.videosService.updateVideo(this.video_selection.selected[0].$key, result)
            .then((data) => {
              this.openSnackBar('Video Saved', 'OKAY');
            })
            .catch((error) => {
              this.openSnackBar(error, 'OKAY');
            });
        }

        this.video_selection.clear();
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

@Component({
  selector: 'video-dialog',
  template: `<h1 mat-dialog-title>
                  <span *ngIf="create">Create Video</span>
                  <span *ngIf="!create">Edit Video</span>
              </h1>
              <div mat-dialog-content>
              <form [formGroup]="form">
                <mat-form-field class="full-width">
                  <input matInput placeholder="Title" type="text" [formControl]="form.controls['title']" [(ngModel)]="data.video.title">
                  <mat-error *ngIf="form.controls['title'].hasError('required')">
                    Title is required
                  </mat-error>
                  <mat-error *ngIf="form.controls['title'].hasError('maxlength')">
                    Title is cannot exceed 25 characters
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="full-width">
                  <input matInput placeholder="Description" type="text" [formControl]="form.controls['description']" [(ngModel)]="data.video.description">
                  <mat-error *ngIf="form.controls['description'].hasError('required')">
                    Description is required
                  </mat-error>
                  <mat-error *ngIf="form.controls['description'].hasError('maxlength')">
                    Description is cannot exceed 500 characters
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="full-width">
                  <input matInput placeholder="Link" type="url" [formControl]="form.controls['link']" [(ngModel)]="data.video.link">
                  <mat-error *ngIf="form.controls['link'].hasError('required')">
                    Link is required
                  </mat-error>
                  <mat-error *ngIf="form.controls['link'].hasError('pattern')">
                    Link must be a valid url format
                  </mat-error>
                </mat-form-field>
              </form>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-button (click)="saveVideo()" [disabled]="!form.valid" color="primary">Ok</button>
             <button mat-button [mat-dialog-close]="false">Cancel</button>
           </div>`
})
export class VideoDialog {

  create: boolean
  form: FormGroup

  constructor(public dialogRef: MatDialogRef<VideoDialog>, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.create = data.video.$key == null;
    this.form = this.fb.group({
      'title': [data.video.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
      'link': [data.video.link || null, Validators.compose([Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})'), Validators.required])],
      'description': [data.video.description || null, Validators.required]
    })
  }

  saveVideo() {
    if (this.form.valid) {
      let now = new Date().toDateString();

      let video = {
        title: this.data.video.title,
        link: this.data.video.link,
        description: this.data.video.description,
        timeStamp: now,
        active: true
      }

      this.dialogRef.close(video);
    }
  }
}