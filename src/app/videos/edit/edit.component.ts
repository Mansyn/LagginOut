import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { VideosService } from '../shared/videos.service';
import { Video } from '../shared/video';

@Component({
    selector: 'edit-video',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditVideoComponent implements OnInit, OnDestroy {

    private sub: any;
    id: string;
    video: any = {};
    form: FormGroup;
    loaded: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private _videosService: VideosService, private fb: FormBuilder, public snackBar: MatSnackBar) {
        this.form = this.fb.group({
            'title': [this.video.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
            'link': [this.video.link || null, Validators.compose([Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})'), Validators.required])],
            'description': [this.video.description || null, Validators.required]
        })
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            var x = this._videosService.getVideo(this.id);
            x.snapshotChanges().subscribe(data => {
                var y = data.payload.toJSON();
                y["$key"] = data.key;
                this.video = y as Video;
                this.loaded = true;
            });
        });
    }

    updateVideo() {
        if (this.form.valid) {
            this.loaded = false;
            let now = new Date().toDateString();

            let updateVideo = {
                title: this.video.title,
                link: this.video.link,
                description: this.video.description,
                timeStamp: now,
                active: true
            }

            console.log(updateVideo);

            this._videosService.updateVideo(this.id, updateVideo)
                .then((data) => {
                    this.loaded = true;
                })
                .catch((error) => {
                    this.openSnackBar(error, 'OKAY');
                });
            this.openSnackBar('Video Updated!', 'OKAY');
            this.router.navigate(["/videos"]);
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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
