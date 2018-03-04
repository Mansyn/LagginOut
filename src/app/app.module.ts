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
	MatPaginatorModule,
	MatProgressBarModule,
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

import { TruncatePipe } from './pipes/truncate.pipe';

import { EmbedVideo } from 'ngx-embed-video';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './videos/add/add.component';
import { EditVideoComponent } from './videos/edit/edit.component';
import { VideosService } from './videos/shared/videos.service';
import { RemoveVideoDialog } from './videos/videos.component';
import { AdminComponent } from './admin/admin.component';
import { VideoDialog } from './admin/admin.component';
import { UserDialog } from './admin/admin.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AccountComponent,
		NavbarComponent,
		FooterComponent,
		VideosComponent,
		AddVideoComponent,
		EditVideoComponent,
		RemoveVideoDialog,
		AdminComponent,
		VideoDialog,
		UserDialog,
		TruncatePipe
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
		MatPaginatorModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatSortModule,
		MatToolbarModule,
		MatTableModule,
		MatTabsModule,
		MatTooltipModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFirestoreModule
	],
	entryComponents: [ RemoveVideoDialog, VideoDialog, UserDialog ],
	providers: [ VideosService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
