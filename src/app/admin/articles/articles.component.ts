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

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;
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

  loading: boolean;
  displayedColumns = ['select', 'title', 'name', 'status', 'date'];
  dataSource = new MatTableDataSource<Article>();
  selection = new SelectionModel<Article>(true, []);

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private articlesService: ArticleService) {
    this.loading = true;
  }

  ngAfterViewInit() {
    this.articlesService.getArticles().snapshotChanges().subscribe((data) => {
      let articles = [];
      data.forEach((element) => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        articles.push(y as Article);
      });

      this.dataSource.data = articles;
      this.loading = false;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  formDate(date) {
    return moment(date).format('l');
  }

  applyArticleFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  articleDialog(isNew: boolean): void {
    let target = isNew ? new Article() : this.selection.selected[0];

    let dialogRef = this.dialog.open(AdminArticleDialog, {
      width: '900px',
      data: { article: target }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        if (isNew) {
          this.articlesService.addArticle(result).then((data) => {
            this.openSnackBar('Article Saved', 'OKAY');
          });
        } else {
          this.articlesService
            .updateArticle(this.selection.selected[0].$key, result)
            .then((data) => {
              this.openSnackBar('Article Saved', 'OKAY');
            })
            .catch((error) => {
              this.openSnackBar(error, 'OKAY');
            });
        }

        this.selection.clear();
      }
    });
  }

  articleDeleteDialog(): void {
    let targets = this.selection.selected;

    let dialogRef = this.dialog.open(AdminArticleDeleteDialog, {
      width: '400px',
      data: { count: targets.length }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        targets.forEach((target) => {
          this.articlesService.deleteArticle(target.$key);
        });
        this.openSnackBar(
          targets.length + ' article(s) deleted',
          'OKAY'
        );
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
  selector: 'admin-article-dialog',
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
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
                    Title is cannot exceed 50 characters
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="full-width">
                  <input matInput placeholder="Name" type="text" [formControl]="form.controls['name']" [(ngModel)]="data.article.name">
                  <mat-error *ngIf="form.controls['name'].hasError('required')">
                    Name is required
                  </mat-error>
                  <mat-error *ngIf="form.controls['name'].hasError('maxlength')">
                    Name is cannot exceed 50 characters
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="half-width">
                  <input matInput [matDatepicker]="pickerDate" [formControl]="form.controls['date']" [(ngModel)]="data.article.date" placeholder="Choose a date">
                  <mat-datepicker-toggle matSuffix [for]="pickerDate"></mat-datepicker-toggle>
                  <mat-datepicker #pickerDate></mat-datepicker>
                  <mat-error *ngIf="form.controls['date'].hasError('required')">
                    Date is required
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="half-width">
                  <input matInput placeholder="Type" type="text" [formControl]="form.controls['type']" [(ngModel)]="data.article.type">
                  <mat-error *ngIf="form.controls['type'].hasError('required')">
                    Type is required
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="full-width">
                  <input matInput placeholder="Excerpt" type="text" [formControl]="form.controls['excerpt']" [(ngModel)]="data.article.excerpt">
                  <mat-error *ngIf="form.controls['excerpt'].hasError('maxlength')">
                    Excerpt is cannot exceed 50 characters
                  </mat-error>
                </mat-form-field>
                <mat-form-field class="full-width">
                  <textarea rows="10" matInput placeholder="Content" type="text" [formControl]="form.controls['content']" [(ngModel)]="data.article.content"></textarea>
                  <mat-error *ngIf="form.controls['content'].hasError('required')">
                    Content is required
                  </mat-error>
                </mat-form-field>
              </form>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-raised-button (click)="saveArticle()" [disabled]="!form.valid" color="primary">Ok</button>
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
    if (!this.create) {
      data.article.date = moment(data.article.date);
    }
    this.form = this.fb.group({
      title: [data.article.title || null, Validators.compose([Validators.maxLength(50), Validators.required])],
      name: [data.article.name || null, Validators.maxLength(50)],
      date: [data.article.date || moment(), Validators.required],
      type: [data.article.type || null, Validators.required],
      excerpt: [data.article.excerpt || null, Validators.maxLength(50)],
      content: [data.article.content || null, Validators.required],
    });
  }

  saveArticle() {
    if (this.form.valid) {
      let now = new Date().toDateString();

      let article = {
        comment_status: this.data.article.comment_status,
        content: this.data.article.content,
        date: this.data.article.date.format('l'),
        date_gmt: this.data.article.date_gmt,
        editor_id: this.data.article.editor_id,
        excerpt: this.data.article.excerpt || '',
        guid: this.data.article.guid,
        id: this.data.article.id,
        mime_type: this.data.article.mime_type,
        modified: this.data.article.modified,
        modified_gmt: this.data.article.modified_gmt,
        name: this.data.article.name || '',
        parent: this.data.article.parent,
        ping_status: this.data.article.ping_status,
        status: this.data.article.status,
        title: this.data.article.title,
        type: this.data.article.type,
        timeStamp: now,
      };

      this.dialogRef.close(article);
    }
  }
}

@Component({
  selector: 'admin-article-delete-dialog',
  template: `<h1 mat-dialog-title>
              <span>Remove Article</span>
              </h1>
           <div mat-dialog-content>
             <p>Are you sure you want to remove {{data.count}} {{data.count > 1 ? 'articles' : 'article'}}?</p>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
             <button mat-button [mat-dialog-close]="false">Cancel</button>
           </div>`
})
export class AdminArticleDeleteDialog {
  constructor(public dialogRef: MatDialogRef<AdminArticleDeleteDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}