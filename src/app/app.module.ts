// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeResolver } from '@angular/compiler/src/pipe_resolver';

// third party libraries
import {
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatToolbarModule,
	MatTabsModule,
	MatTooltipModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmbedVideo } from 'ngx-embed-video';

// app code
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { ErrorsModule } from './core/errors/errors.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { VideosService } from './videos/shared/videos.service';
import { PlaylistsService } from './videos/shared/playlists.service';
import { VideosComponent } from './videos/videos.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './articles/shared/article.service';
import { ProfileService } from './core/profile.service';
import { TwitchStreamsComponent } from './components/twitch-streams/twitch-streams.component';
import { RegisterComponent } from './account/register/register.component';
import { TwitchComponent } from './twitch/twitch.component';
import { TwitchVideoComponent } from './components/twitch-video/twitch-video.component';
import { SocialComponent } from './social/social.component';
import { SocialService } from './social/social.service';
import { TwitchService } from './twitch/shared/twitch.service';
import { NotificationService } from './core/services/notification.service'
import { TwitchApiService } from './twitch/shared/twitch-api.service'

// utilities, pipes, etc
import { DisableControlDirective } from './utilities/directives/disable-control'
import { FocusDirective } from './utilities/directives/focus.directive'
import { PipesModule } from './utilities/pipes/pipes.module'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AccountComponent,
		LoginComponent,
		NavbarComponent,
		FooterComponent,
		VideosComponent,
		ArticlesComponent,
		DisableControlDirective,
		FocusDirective,
		RegisterComponent,
		TwitchComponent,
		TwitchVideoComponent,
		SocialComponent,
		TwitchStreamsComponent
	],
	imports: [
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFirestoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		EmbedVideo.forRoot(),
		PipesModule,
		CoreModule,
		ErrorsModule,
		HttpModule,
		MatButtonModule,
		MatCardModule,
		MatChipsModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatToolbarModule,
		MatTabsModule,
		MatTooltipModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [NotificationService, VideosService, TwitchApiService, ArticleService, PlaylistsService, ProfileService, SocialService, TwitchService],
	bootstrap: [AppComponent]
})
export class AppModule { }
