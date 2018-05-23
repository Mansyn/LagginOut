import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from '@angular/material'
import { AngularFireList } from 'angularfire2/database'
import { Observable } from '@firebase/util'
import { Subject } from 'rxjs'

import { TwitchService } from '../../twitch/shared/twitch.service'
import { TwitchStreamer } from '../../twitch/shared/streamer'
import { AdminTwitchDialog } from './dialogs/twitch.component'
import { AdminTwitchDeleteDialog } from './dialogs/delete.component'

@Component({
  selector: 'admin-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class AdminTwitchStreamsComponent implements AfterViewInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>()

  public streamers: TwitchStreamer[]

  constructor(
    private twitchService: TwitchService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.twitchService.getStreamers()
      .snapshotChanges()
      .takeUntil(this.destroy$)
      .subscribe((data) => {
        let streamers = [];
        data.forEach((element) => {
          var e = element.payload.toJSON();
          e['$key'] = element.key;
          streamers.push(e as TwitchStreamer);
        });
        this.streamers = streamers
      })
  }

  twitchDialog(key: string): void {
    let target = !key.length ? new TwitchStreamer() : this.streamers.find(s => s.$key == key)

    let dialogRef = this.dialog.open(AdminTwitchDialog, {
      width: '450px',
      data: { streamer: target }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (!key.length) {
          this.twitchService.addStreamer(result).then((data) => {
            this.openSnackBar('Streamer Saved', 'OKAY');
          });
        } else {
          this.twitchService
            .updateStreamer(target.$key, result)
            .then((data) => {
              this.openSnackBar('Streamer Saved', 'OKAY');
            })
            .catch((error) => {
              this.openSnackBar(error, 'OKAY');
            });
        }
      }
    });
  }

  deleteDialog(key: string): void {
    let target = this.streamers.find(s => s.$key == key)

    let dialogRef = this.dialog.open(AdminTwitchDeleteDialog, {
      width: '450px',
      data: { name: target.name }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.twitchService.deleteStreamer(target.$key)
        this.openSnackBar(
          target.name + ' deleted',
          'OKAY'
        )
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
