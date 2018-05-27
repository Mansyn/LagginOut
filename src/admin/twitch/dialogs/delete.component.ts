import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'admin-twitch-delete-dialog',
  template: `<h1 mat-dialog-title>
              <span>Remove Streamer</span>
              </h1>
           <div mat-dialog-content>
             <p>Are you sure you want to remove {{data.name}}?</p>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
             <button mat-button [mat-dialog-close]="false">Cancel</button>
           </div>`
})
export class AdminTwitchDeleteDialog {
  constructor(public dialogRef: MatDialogRef<AdminTwitchDeleteDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}