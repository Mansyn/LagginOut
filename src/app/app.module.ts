// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
	MatSelectModule,
	MatSidenavModule,
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
import { TinymceModule } from 'angular2-tinymce';

// app code
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { VideosService } from './videos/shared/videos.service';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { UserDialog } from './admin/users/users.component';
import { VidsComponent } from './vids/vids.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './articles/shared/article.service';
import { EditorComponent } from './editor/editor.component';
import { EditorArticlesComponent } from './editor/articles/articles.component';
import { AdminVideosComponent } from './admin/videos/videos.component';
import { AdminVideoDialog } from './admin/videos/dialogs/video.component';
import { AdminVideoDeleteDialog } from './admin/videos/dialogs/delete.component';
import { AdminArticlesComponent } from './admin/articles/articles.component';
import { AdminArticleDialog } from './admin/articles/dialogs/article.component';
import { AdminArticleDeleteDialog } from './admin/articles/dialogs/delete.component';
import { PipeResolver } from '@angular/compiler/src/pipe_resolver';

// utilities, pipes, etc
import { TruncatePipe } from './pipes/truncate.pipe';
import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AccountComponent,
		NavbarComponent,
		FooterComponent,
		VidsComponent,
		ArticlesComponent,
		AdminComponent,
		EditorArticlesComponent,
		UserDialog,
		TruncatePipe,
		EditorComponent,
		UsersComponent,
		AdminVideosComponent,
		AdminVideoDialog,
		AdminVideoDeleteDialog,
		AdminArticlesComponent,
		AdminArticleDialog,
		AdminArticleDeleteDialog
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
		MatSelectModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatSortModule,
		MatToolbarModule,
		MatTableModule,
		MatTabsModule,
		MatTooltipModule,
		ReactiveFormsModule,
		TinymceModule.withConfig({})
	],
	entryComponents: [AdminVideoDialog, AdminVideoDeleteDialog, AdminArticleDialog, AdminArticleDeleteDialog, UserDialog],
	providers: [VideosService, ArticleService],
	bootstrap: [AppComponent]
})
export class AppModule { }
