import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'admin-article-dialog',
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminArticleDialog {
  create: boolean;
  form: FormGroup;
  public quill;
  public quillOptions = {
    placeholder: "insert content..."
  };

  constructor(
    public dialogRef: MatDialogRef<AdminArticleDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.create = data.article.$key == null;
    if (!this.create) {
      data.article.date = moment(data.article.date, 'M/D/YYYY');
    }
    this.form = this.fb.group({
      title: [data.article.title || null, Validators.compose([Validators.maxLength(50), Validators.required])],
      name: [data.article.name || null, Validators.maxLength(50)],
      date: [data.article.date || moment(), Validators.required],
      type: [data.article.type || null, Validators.required],
      excerpt: [data.article.excerpt || null, Validators.maxLength(100)],
      content: [data.article.content || null],
    });
  }

  onEditorBlured(quill) {
    //console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    //console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.quill = quill;
    //console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    //console.log('quill content is changed!', quill, html, text);
  }

  goToFullscreen() {
    let result = { fullscreen: true, new: this.create };
    this.dialogRef.close(result);
  }

  saveArticle() {
    if (this.form.valid) {
      let now = new Date().toDateString();

      let article = {
        comment_status: this.data.article.comment_status,
        content: this.data.article.content || '',
        date: moment(this.data.article.date).format('l'),
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