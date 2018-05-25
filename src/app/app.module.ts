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
import { CoreModule } from './core/core.module'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { VideosService } from './videos/shared/videos.service';
import { PlaylistsService } from './videos/shared/playlists.service';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { VideosComponent } from './videos/videos.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './articles/shared/article.service';
import { EditorComponent } from './editor/editor.component';
import { EditorArticlesComponent } from './editor/articles/articles.component';
import { ProfileService } from './core/profile.service';
import { AdminUserRoleDialog } from './admin/users/users.component';
import { AdminUserDialog } from './admin/users/dialogs/user/user.component'
import { AdminVideosComponent } from './admin/videos/videos.component';
import { AdminVideoDialog } from './admin/videos/dialogs/video.component';
import { AdminVideoDeleteDialog } from './admin/videos/dialogs/delete.component';
import { AdminArticlesComponent } from './admin/articles/articles.component';
import { AdminArticleComponent } from './admin/articles/article.component';
import { AdminArticleDialog } from './admin/articles/dialogs/article.component';
import { AdminArticleDeleteDialog } from './admin/articles/dialogs/delete.component';
import { AdminVideoHighlightDialog } from './admin/videos/dialogs/highlight.component';
import { AdminPlaylistsComponent } from './admin/playlists/playlists.component';
import { AdminPlaylistDialog } from './admin/playlists/dialogs/playlist.component';
import { AdminPlaylistDeleteDialog } from './admin/playlists/dialogs/delete.component';
import { AdminTwitchStreamsComponent } from './admin/twitch/twitch.component';
import { AdminTwitchDialog } from './admin/twitch/dialogs/twitch.component';
import { AdminTwitchDeleteDialog } from './admin/twitch/dialogs/delete.component';
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
import { DisableControlDirective } from './utilities/directives/disable-control'
import { FocusDirective } from './utilities/directives/focus.directive'
import { PhonePipe } from './utilities/pipes/phone.pipe'

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
		AdminComponent,
		EditorArticlesComponent,
		TruncatePipe,
		ReversePipe,
		PhonePipe,
		EditorComponent,
		UsersComponent,
		AdminUserRoleDialog,
		AdminUserDialog,
		AdminVideosComponent,
		AdminVideoDialog,
		AdminVideoDeleteDialog,
		AdminArticlesComponent,
		AdminArticleComponent,
		AdminArticleDialog,
		AdminArticleDeleteDialog,
		AdminVideoHighlightDialog,
		AdminPlaylistsComponent,
		AdminPlaylistDialog,
		AdminPlaylistDeleteDialog,
		AdminTwitchStreamsComponent,
		AdminTwitchDialog,
		AdminTwitchDeleteDialog,
		DisableControlDirective,
		FocusDirective,
		RegisterComponent,
		TwitchComponent,
		TwitchVideoComponent,
		SocialComponent,
		TwitchStreamsComponent
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFirestoreModule,
		AppRoutingModule,
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
	entryComponents: [
		AdminUserRoleDialog,
		AdminUserDialog,
		AdminVideoDialog,
		AdminVideoDeleteDialog,
		AdminArticleDialog,
		AdminArticleDeleteDialog,
		AdminVideoHighlightDialog,
		AdminPlaylistDialog,
		AdminPlaylistDeleteDialog,
		AdminTwitchDialog,
		AdminTwitchDeleteDialog],
	providers: [VideosService, ArticleService, PlaylistsService, ProfileService, SocialService, TwitchService],
	bootstrap: [AppComponent]
})
export class AppModule { }
