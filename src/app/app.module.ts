import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
} from '@angular/material'

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomeComponent } from './home/home.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'

import { CoreModule } from './core/core.module';
import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './videos/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuperSecretComponent,
    UserLoginComponent,
    SubscriberPageComponent,
    NavbarComponent,
    FooterComponent,
    VideosComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
