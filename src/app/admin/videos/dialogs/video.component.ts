import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'video-dialog',
  templateUrl: './video.component.html'
})
export class AdminVideoDialog {
  create: boolean;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminVideoDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.create = data.video.$key == null;
    this.form = this.fb.group({
      title: [data.video.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
      link: [
        data.video.link || null,
        Validators.compose([
          Validators.pattern(
            '(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9].[^s]{2,})'
          ),
          Validators.required
        ])
      ],
      description: [data.video.description || null, Validators.required]
    });
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
      };

      this.dialogRef.close(video);
    }
  }
}
