import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
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

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { TruncatePipe } from './pipes/truncate.pipe';

import { EmbedVideo } from 'ngx-embed-video';

import { CoreModule } from './core/core.module';

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
import { AdminVideosComponent, AdminVideoDialog } from './admin/videos/videos.component';
import { AdminArticlesComponent, AdminArticleDialog } from './admin/articles/articles.component';

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
		AdminVideosComponent,
		UsersComponent,
		AdminArticlesComponent,
		AdminVideoDialog,
		AdminArticleDialog
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpModule,
		EmbedVideo.forRoot(),
		CoreModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDialogModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
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
		NgxCarouselModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFirestoreModule
	],
	entryComponents: [AdminVideoDialog, AdminArticleDialog, UserDialog],
	providers: [VideosService, ArticleService],
	bootstrap: [AppComponent]
})
export class AppModule { }
