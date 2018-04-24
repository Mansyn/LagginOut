import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material'

import { AuthService } from '../core/auth.service'
import { ProfileService } from '../core/profile.service'
import { Profile, User } from '../core/user'
import { Article } from '../articles/shared/article'
import { ArticleService } from '../articles/shared/article.service'

import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/takeUntil'
import { combineLatest } from 'rxjs/observable/combineLatest'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>()

  user: Observable<User>
  nameEditing: boolean = false
  phoneEditing: boolean = false

  userRef: User
  profileRef: Profile
  nameRef: string = ''
  phoneNumberRef: string = ''
  form: FormGroup
  mailingForm: FormGroup
  articles: Article[] = []

  constructor(
    private afAuth: AngularFireAuth,
    public auth: AuthService,
    public profileService: ProfileService,
    private fb: FormBuilder,
    private router: Router,
    private articleService: ArticleService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildForms()
    this.auth.user$
      .takeUntil(this.destroy$)
      .subscribe(user => {
        if (user && user.uid) {
          this.getUserData(user)
          this.onChanges()
        } else {
          this.router.navigate(['/account/login'])
        }
      })
  }

  buildForms() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'password': ['', Validators.required]
    })
    this.mailingForm = this.fb.group({
      'mailingList': ['']
    })
  }

  getUserData(user) {
    const userProfile$ = this.profileService.getUserProfile(user.uid)
    const userArticles$ = this.articleService.getUserArticlesData(user.uid)

    combineLatest(
      userProfile$, userArticles$,
      (profileData, articlesData) => {
        // profile
        let _profile = profileData[0].payload.toJSON()
        _profile["$key"] = profileData[0].key
        this.profileRef = _profile as Profile
        this.nameRef = this.profileRef.name
        this.phoneNumberRef = this.profileRef.phoneNumber

        // articles
        let isEditor = this.auth.canEdit(user)
        if (isEditor) {
          articlesData.forEach(_article => {
            let article = _article.payload.toJSON()
            article["$key"] = _article.key
            this.articles.push(article as Article)
          })
        }
      }
    ).takeUntil(this.destroy$).subscribe()
  }

  onChanges(): void {
    this.mailingForm.get('mailingList').valueChanges
      .subscribe(val => {
        this.profileRef.mailing = val
        this.updateProfile()
      });
  }

  toggleName(showInput) {
    this.nameEditing = !this.nameEditing
    if (!this.nameEditing) {
      if (this.profileRef.name.length) {
        this.updateProfile()
      } else {
        this.profileRef.name = this.nameRef
      }
    }
  }

  togglePhone(showInput) {
    this.phoneEditing = !this.phoneEditing
    if (!this.phoneEditing) {
      if (this.profileRef.phoneNumber.length == 10) {
        this.updateProfile()
      } else {
        this.profileRef.phoneNumber = this.phoneNumberRef
      }
    }
  }

  private updateProfile() {
    let targetProfile = Object.assign({}, this.profileRef)
    delete targetProfile['$key']
    this.profileService.updateProfile(this.profileRef['$key'], targetProfile)
  }

  signout() {
    let that = this
    this.afAuth.auth.signOut().then(function () {
      that.router.navigate(['/home'])
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
