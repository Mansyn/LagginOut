import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { VideosService } from '../shared/videos.service';
import { Video } from '../shared/Video';

@Component({
  selector: 'add-video',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddVideoComponent {

  video: any = {};
  form: FormGroup;
  loaded: boolean = true;

  constructor(private router: Router, private _videosService: VideosService, private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.form = this.fb.group({
      'title': [this.video.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
      'link': [this.video.link || null, Validators.compose([Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})'), Validators.required])],
      'description': [this.video.description || null, Validators.required]
    })
  }

  addVideo() {
    if (this.form.valid) {
      this.loaded = false;
      let now = new Date().toDateString();

      let video = {
        title: this.video.title,
        link: this.video.link,
        description: this.video.description,
        timeStamp: now,
        active: true
      }

      console.log(video);

      this._videosService.addVideo(video)
        .then((data) => {
          this.loaded = true;
        });
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

  cancel() {
    this.router.navigate(["/videos"]);
  }
}
