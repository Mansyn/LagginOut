import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'playlist-dialog',
  templateUrl: './playlist.component.html'
})
export class AdminPlaylistDialog {
  create: boolean;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminPlaylistDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.create = data.playlist.$key == null;
    this.form = this.fb.group({
      title: [data.playlist.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
      url: [
        data.playlist.url || null,
        Validators.compose([
          Validators.pattern(
            '(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9].[^s]{2,})'
          ),
          Validators.required
        ])
      ]
    });
  }

  savePlaylist() {
    if (this.form.valid) {
      let now = new Date().toDateString();

      let playlist = {
        title: this.data.playlist.title,
        url: this.data.playlist.url,
        timeStamp: now,
        active: true
      };

      this.dialogRef.close(playlist);
    }
  }
}
