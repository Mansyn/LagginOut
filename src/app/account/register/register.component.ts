import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material'
import { AngularFireAuth } from 'angularfire2/auth'

import { AuthService } from '../../core/auth.service'
import { Router } from '@angular/router'
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  form: FormGroup
  mailing: boolean = false
  working: boolean
  destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public auth: AuthService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.auth.user$
      .takeUntil(this.destroy$)
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/account'])
        }
      })
    this.buildForm()
  }

  buildForm() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'password': ['', Validators.required],
      'mailing': [false]
    })
  }

  register(form: FormGroup) {
    if (this.form.valid) {
      this.working = true
      let self = this
      let form = this.form.value
      this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password)
        .then((response) => {
          self.auth.updateUser(response)
          self.router.navigate(['/account'])
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            self.openSnackBar('Password is too weak.', 'OKAY');
          } else if (errorCode == 'auth/email-already-in-use') {
            self.openSnackBar('Email already in use', 'OKAY');
          }
          else {
            self.openSnackBar(errorMessage, 'OKAY');
          }
          self.working = false;
          console.log(error);
        });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
