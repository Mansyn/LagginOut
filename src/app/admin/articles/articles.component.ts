import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialog,
  MatTabChangeEvent,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from '@angular/material';
import _ from 'lodash';

import { ArticleService } from '../../articles/shared/article.service';
import { Article } from '../../articles/shared/article';

@Component({
  selector: 'admin-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class AdminArticlesComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['select', 'title', 'name', 'status', 'date'];
  dataSource = new MatTableDataSource<Article>();
  selection = new SelectionModel<Article>(false, []);

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private articlesService: ArticleService) { }

  ngAfterViewInit() {
    this.articlesService.getArticles().snapshotChanges().subscribe((data) => {
      let articles = [];
      data.forEach((element) => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        articles.push(y as Article);
      });

      this.dataSource.data = articles;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyArticleFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  articleDialog(isNew: boolean): void {
    let target = isNew ? new Article() : this.selection.selected[0];

    let dialogRef = this.dialog.open(AdminArticleDialog, {
      width: '450px',
      data: { article: target }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        if (isNew) {
          // this.videosService.addVideo(result).then((data) => {
          //   this.openSnackBar('Video Saved', 'OKAY');
          // });
        } else {
          // this.videosService
          //   .updateVideo(this.selection.selected[0].$key, result)
          //   .then((data) => {
          //     this.openSnackBar('Video Saved', 'OKAY');
          //   })
          //   .catch((error) => {
          //     this.openSnackBar(error, 'OKAY');
          //   });
        }

        this.selection.clear();
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}

@Component({
  selector: 'article-dialog',
  template: `<h1 mat-dialog-title>
                  <span *ngIf="create">Create Article</span>
                  <span *ngIf="!create">Edit Article</span>
              </h1>
              <div mat-dialog-content>
              <form [formGroup]="form">
                <mat-form-field class="full-width">
                  <input matInput placeholder="Title" type="text" [formControl]="form.controls['title']" [(ngModel)]="data.article.title">
                  <mat-error *ngIf="form.controls['title'].hasError('required')">
                    Title is required
                  </mat-error>
                  <mat-error *ngIf="form.controls['title'].hasError('maxlength')">
                    Title is cannot exceed 25 characters
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="full-width">
                  <input matInput placeholder="Content" type="text" [formControl]="form.controls['content']" [(ngModel)]="data.article.content">
                  <mat-error *ngIf="form.controls['content'].hasError('required')">
                    Content is required
                  </mat-error>
                </mat-form-field>
              </form>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-button (click)="saveVideo()" [disabled]="!form.valid" color="primary">Ok</button>
             <button mat-button [mat-dialog-close]="false">Cancel</button>
           </div>`
})
export class AdminArticleDialog {
  create: boolean;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminArticleDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.create = data.article.$key == null;
    this.form = this.fb.group({
      title: [data.article.title || null, Validators.compose([Validators.maxLength(25), Validators.required])],
      content: [data.article.content || null, Validators.required],
      description: [data.article.description || null, Validators.required]
    });
  }

  saveArticle() {
    if (this.form.valid) {
      let now = new Date().toDateString();

      let article = {
        id: this.data.article.id,
        editor_id: this.data.article.editor_id,
        date: this.data.article.date,
        title: this.data.article.title,
        name: this.data.article.name,
        content: this.data.article.content,
        status: this.data.article.status,
        timeStamp: now
      };

      this.dialogRef.close(article);
    }
  }
}