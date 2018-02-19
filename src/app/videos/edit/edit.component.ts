import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { VideosService } from '../videos.service';

import { Video } from '../Video';

@Component({
    selector: 'edit-video',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditVideoComponent {

    key: number;
    //form validation
    video: any = {};
    form: FormGroup;
    Msg: any;

    constructor(private router: Router, private _videosService: VideosService, private fb: FormBuilder, public snackBar: MatSnackBar) {
        this.form = this.fb.group({
            'title': [this.video.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
            'link': [this.video.link || null, Validators.compose([Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})'), Validators.required])],
            'description': [this.video.description || null, Validators.required]
        })
    }

    updateVideo() {
        if (this.form.valid) {
            let now = new Date().toDateString();

            let updateVideo = {
                title: this.video.title,
                link: this.video.link,
                description: this.video.description,
                timeStamp: now,
                active: true
            }

            console.log(updateVideo);

            this._videosService.updateVideo(this.key, updateVideo);
            this.openSnackBar('Video Updated!', 'OKAY');
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
