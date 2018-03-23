import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'admin-playlist-delete-dialog',
  template: `<h1 mat-dialog-title>
              <span>Remove Playlist</span>
              </h1>
           <div mat-dialog-content>
             <p>Are you sure you want to remove {{data.count}} {{data.count > 1 ? 'playlists' : 'playlist'}}?</p>
           </div>
           <div mat-dialog-actions align="end">
             <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
             <button mat-button [mat-dialog-close]="false">Cancel</button>
           </div>`
})
export class AdminPlaylistDeleteDialog {
  constructor(public dialogRef: MatDialogRef<AdminPlaylistDeleteDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}