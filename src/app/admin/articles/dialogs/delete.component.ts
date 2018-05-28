import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

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