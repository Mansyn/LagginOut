import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { VideosService } from '../videos.service';

import { Video } from '../Video';

@Component({
  selector: 'add-video',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddVideoComponent {

  //form validation
  newVideo: any = {};
  form: FormGroup;
  Msg: any;

  constructor(private router: Router, private _videosService: VideosService, private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.form = this.fb.group({
      'title': [this.newVideo.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
      'link': [this.newVideo.link || null, Validators.compose([Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})'), Validators.required])],
      'description': [this.newVideo.description || null, Validators.required]
    })
  }

  addVideo() {
    if (this.form.valid) {
      let now = new Date().toDateString();

      let newVideo = {
        title: this.newVideo.title,
        link: this.newVideo.link,
        description: this.newVideo.description,
        timeStamp: now,
        active: true
      }

      console.log(newVideo);

      this._videosService.addVideo(newVideo);
      this.openSnackBar('Video Added!', 'OKAY');
      this.form.reset();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  back() {
    this.router.navigate(["/videos"]);
  }
}
