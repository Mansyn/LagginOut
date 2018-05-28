import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { AdminUserRoleDialog } from './users/users.component';
import { AdminUserDialog } from './users/dialogs/user/user.component';
import { AdminVideosComponent } from './videos/videos.component';
import { AdminVideoDialog } from './videos/dialogs/video.component';
import { AdminVideoDeleteDialog } from './videos/dialogs/delete.component';
import { AdminArticlesComponent } from './articles/articles.component';
import { AdminArticleComponent } from './articles/article.component';
import { AdminArticleDialog } from './articles/dialogs/article.component';
import { AdminArticleDeleteDialog } from './articles/dialogs/delete.component';
import { AdminVideoHighlightDialog } from './videos/dialogs/highlight.component';
import { AdminPlaylistsComponent } from './playlists/playlists.component';
import { AdminPlaylistDialog } from './playlists/dialogs/playlist.component';
import { AdminPlaylistDeleteDialog } from './playlists/dialogs/delete.component';
import { AdminTwitchStreamsComponent } from './twitch/twitch.component';
import { AdminTwitchDialog } from './twitch/dialogs/twitch.component';
import { AdminTwitchDeleteDialog } from './twitch/dialogs/delete.component';

import { PhonePipe } from '../utilities/pipes/phone.pipe';

@NgModule({
	imports: [
		CommonModule,
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
	],
	declarations: [
		AdminComponent,
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
		PhonePipe
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
		AdminTwitchDeleteDialog
	],
	exports: [AdminComponent]
})
export class AdminModule { }
