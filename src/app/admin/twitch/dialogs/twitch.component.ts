import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'twitch-dialog',
  templateUrl: './twitch.component.html'
})
export class AdminTwitchDialog {
  create: boolean;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminTwitchDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.create = data.streamer.$key == null
    this.form = this.fb.group({
      'id': [data.streamer.id, Validators.required],
      'name': [data.streamer.name, Validators.required],
      'banner': [data.streamer.banner || null]
    })
  }

  save() {
    if (this.form.valid) {
      let form = this.form.value

      let streamer = {
        id: form.id,
        name: form.name,
        banner: form.banner,
        active: true
      };

      this.dialogRef.close(streamer);
    }
  }
}
