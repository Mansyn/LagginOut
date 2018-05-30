import { Component, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'user-dialog',
  templateUrl: './user.component.html'
})
export class AdminUserDialog {

  create: boolean
  form: FormGroup

  constructor(public dialogRef: MatDialogRef<AdminUserDialog>, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      'displayName': [data.user.profile.name || null, Validators.compose([Validators.maxLength(30), Validators.required])],
      'email': [data.user.email || null, Validators.compose([Validators.email, Validators.required])],
      'phoneNumber': [data.user.profile.phoneNumber || null, Validators.compose([Validators.pattern('[0-9]+'), Validators.maxLength(10), Validators.minLength(10)])],
      'photoURL': [data.user.photoURL || null]
    })
  }

  refresh: Subject<any> = new Subject()

  onSubmit() {
    if (this.form.valid) {
      let form = this.form.value
      let now = new Date().toDateString()

      let user = {
        displayName: form.displayName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        photoURL: form.photoURL
      }

      this.dialogRef.close(user)
    }
  }
}