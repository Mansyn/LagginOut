import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'admin-video-highlight-dialog',
  template: `<h1 mat-dialog-title>
                <span *ngIf="data.highlighted">Unhighlight Video</span>
                <span *ngIf="!data.highlighted">Highlight Video</span>
              </h1>
           <div mat-dialog-content>
             <p>Are you sure you want to {{data.highlighted ? 'un' : ''}}highlight {{data.title}}?</p>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
             <button mat-button [mat-dialog-close]="false">Cancel</button>
           </div>`
})
export class AdminVideoHighlightDialog {
  constructor(public dialogRef: MatDialogRef<AdminVideoHighlightDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}