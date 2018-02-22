import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatDialogModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatProgressBarModule
} from '@angular/material'

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './account/user-login/user-login.component';
import { AccountComponent } from './account/account.component';
//import { SuperSecretComponent } from './super-secret/super-secret.component';
//import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './videos/add/add.component';
import { EditVideoComponent } from './videos/edit/edit.component';
import { VideosService } from './videos/shared/videos.service';
import { RemoveVideoDialog } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    AccountComponent,
    NavbarComponent,
    FooterComponent,
    VideosComponent,
    AddVideoComponent,
    EditVideoComponent,
    RemoveVideoDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  entryComponents: [RemoveVideoDialog],
  providers: [AngularFirestore, VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
