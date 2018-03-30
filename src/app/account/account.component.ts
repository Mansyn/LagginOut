import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AngularFireAuth } from 'angularfire2/auth'
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../core/auth.service'

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  form: FormGroup
  email: string
  password: string
  working: boolean

  constructor(private afAuth: AngularFireAuth,
    public auth: AuthService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar) {
    this.working = false
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'password': ['', Validators.required]
    })
  }

  login() {
    if (this.form.valid) {
      this.working = true;
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.working = false
        })
        .catch(function (error) {
          // Handle Errors here.
          this.openSnackBar(error.message, 'OKAY')
          this.working = false
          console.log(error)
        })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    })
  }
}
