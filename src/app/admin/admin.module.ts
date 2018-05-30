import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

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
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatToolbarModule,
	MatTableModule,
	MatTabsModule,
	MatTooltipModule
} from '@angular/material';
import { QuillEditorModule } from 'ngx-quill-editor'

// app
import { AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './admin.component'
import { UsersComponent } from './users/users.component'
import { AdminUserRoleDialog } from './users/users.component'
import { AdminUserDialog } from './users/dialogs/user.component'
import { AdminVideosComponent } from './videos/videos.component'
import { AdminVideoDialog } from './videos/dialogs/video.component'
import { AdminVideoDeleteDialog } from './videos/dialogs/delete.component'
import { AdminArticlesComponent } from './articles/articles.component'
import { AdminArticleComponent } from './articles/article.component'
import { AdminArticleDialog } from './articles/dialogs/article.component'
import { AdminArticleDeleteDialog } from './articles/dialogs/delete.component'
import { AdminVideoHighlightDialog } from './videos/dialogs/highlight.component'
import { AdminPlaylistsComponent } from './playlists/playlists.component'
import { AdminPlaylistDialog } from './playlists/dialogs/playlist.component'
import { AdminPlaylistDeleteDialog } from './playlists/dialogs/delete.component'
import { AdminTwitchStreamsComponent } from './twitch/twitch.component'
import { AdminTwitchDialog } from './twitch/dialogs/twitch.component'
import { AdminTwitchDeleteDialog } from './twitch/dialogs/delete.component'

// utilities
import { PipesModule } from '../utilities/pipes/pipes.module'

@NgModule({
	imports: [
		AdminRoutingModule,
		PipesModule,
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
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatToolbarModule,
		MatTableModule,
		MatTabsModule,
		MatTooltipModule,
		QuillEditorModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule
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
		AdminTwitchDeleteDialog
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
	]
})
export class AdminModule { }
