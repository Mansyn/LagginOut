import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
} from '@angular/material'
import { QuillEditorModule } from 'ngx-quill-editor'

// app
import { EditorRoutingModule } from './editor-routing.module'
import { EditorComponent } from './editor.component'
import { EditorArticlesComponent } from './articles/articles.component'
import { EditorArticleComponent } from './articles/article.component'
import { EditorArticleDialog } from './articles/dialogs/article.component'
import { EditorArticleDeleteDialog } from './articles/dialogs/delete.component'

// utilities
import { PipesModule } from '../utilities/pipes/pipes.module'

@NgModule({
  imports: [
    EditorRoutingModule,
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
  ],
  declarations: [
    EditorComponent,
    EditorArticlesComponent,
    EditorArticleComponent,
    EditorArticleDialog,
    EditorArticleDeleteDialog
  ],
  entryComponents: [
    EditorArticleDialog,
    EditorArticleDeleteDialog
  ]
})
export class EditorModule { }
