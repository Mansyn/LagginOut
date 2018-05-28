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
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatSelectModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatToolbarModule,
	MatTableModule,
	MatTabsModule,
	MatTooltipModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmbedVideo } from 'ngx-embed-video';
import { QuillEditorModule } from 'ngx-quill-editor';

// app code
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { VideosService } from './videos/shared/videos.service';
import { PlaylistsService } from './videos/shared/playlists.service';
import { VideosComponent } from './videos/videos.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './articles/shared/article.service';
import { EditorComponent } from './editor/editor.component';
import { EditorArticlesComponent } from './editor/articles/articles.component';
import { ProfileService } from './core/profile.service';
import { EditorArticleComponent } from './editor/articles/article.component';
import { EditorArticleDialog } from './editor/articles/dialogs/article.component';
import { EditorArticleDeleteDialog } from './editor/articles/dialogs/delete.component';
import { TwitchStreamsComponent } from './components/twitch-streams/twitch-streams.component';
import { RegisterComponent } from './account/register/register.component';
import { TwitchComponent } from './twitch/twitch.component';
import { TwitchVideoComponent } from './components/twitch-video/twitch-video.component';
import { SocialComponent } from './social/social.component';
import { SocialService } from './social/social.service';
import { TwitchService } from './twitch/shared/twitch.service';

// utilities, pipes, etc
import { TruncatePipe } from './pipes/truncate.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { DisableControlDirective } from './utilities/directives/disable-control';
import { FocusDirective } from './utilities/directives/focus.directive';

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
		EditorArticlesComponent,
		TruncatePipe,
		ReversePipe,
		EditorComponent,
		EditorArticleComponent,
		EditorArticleDialog,
		EditorArticleDeleteDialog,
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
		CoreModule,
		HttpModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatSidenavModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatToolbarModule,
		MatTableModule,
		MatTabsModule,
		MatTooltipModule,
		QuillEditorModule,
		FormsModule,
		ReactiveFormsModule
	],
	entryComponents: [EditorArticleDialog, EditorArticleDeleteDialog],
	providers: [VideosService, ArticleService, PlaylistsService, ProfileService, SocialService, TwitchService],
	bootstrap: [AppComponent]
})
export class AppModule { }
