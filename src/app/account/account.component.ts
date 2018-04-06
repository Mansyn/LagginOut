import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AngularFireAuth } from 'angularfire2/auth'
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../core/auth.service'
import { ProfileService } from '../core/profile.service'
import { Profile } from '../core/user'
import { Article } from '../articles/shared/article'
import { ArticleService } from '../articles/shared/article.service'

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  form: FormGroup
  mailingForm: FormGroup
  working: boolean
  profile: Profile
  articles: Article[] = []

  constructor(private afAuth: AngularFireAuth,
    public auth: AuthService,
    public profileService: ProfileService,
    private fb: FormBuilder,
    private articleService: ArticleService,
    public snackBar: MatSnackBar) {
    this.working = false
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'password': ['', Validators.required]
    })
    this.mailingForm = this.fb.group({
      'mailingList': ['']
    })
  }

  ngOnInit(): void {
    this.getUserData()
    this.onChanges()
  }

  getUserData() {
    this.auth.user$.subscribe(user => {
      this.profileService.getUserProfiles(user.uid)
        .snapshotChanges()
        .subscribe((profiles) => {
          if (profiles.length == 0) {
            let newProfile = {
              user_uid: user.uid,
              mailing: false
            }
            this.profileService.addProfile(newProfile)
              .then((data) => {
                this.profile = {
                  uid: data.key,
                  user_uid: user.uid,
                  mailing: false
                }
              })
          } else {
            let p = profiles[0].payload.toJSON()
            p["uid"] = profiles[0].key
            this.profile = p as Profile
          }
        })
      let isEditor = this.auth.canEdit(user)
      if (isEditor) {
        this.articleService.getUserArticles(user.uid)
          .snapshotChanges()
          .subscribe((data) => {
            data.forEach(element => {
              var x = element.payload.toJSON()
              x["$key"] = element.key
              this.articles.push(x as Article)
            })
          })
      }
    })
  }

  onChanges(): void {
    this.mailingForm.get('mailingList').valueChanges.subscribe(val => {
      let updatedProfile = {
        user_uid: this.profile.user_uid,
        mailing: val
      }
      this.profileService.updateProfile(this.profile.uid, updatedProfile)
    });
  }

  login() {
    if (this.form.valid) {
      let form = this.form.value;
      this.working = true;
      this.afAuth.auth.signInWithEmailAndPassword(form.email, form.password)
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
