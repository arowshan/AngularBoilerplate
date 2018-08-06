import { Component, OnInit } from '@angular/core';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material/dialog';
import { ApiService } from '../../services/apis/api.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  animal;
  filesToUpload = [];

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '250px',
      data: { name: 'aaa', animal: 'bbb' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  createReservation() {
    this.apiService.createReservation().subscribe();
  }

  getAllReservations() {
    this.apiService.getAllReservations().subscribe();
  }

  handleFileInput(files) {
    this.filesToUpload = files;
  }

  uploadFiles() {
    if (this.filesToUpload.length === 1) {
      const file = this.filesToUpload[0];
      this.apiService.uploadFile(file).subscribe(res => {
        // do something, if upload success
      });
    } else if (this.filesToUpload.length > 1) {
      let files = [];
      // for (let i = 0; i < this.filesToUpload.length; i++) {
      //   files.push(this.filesToUpload[i]);
      // }
      this.apiService.uploadMultiple([files[0]]).subscribe(res => {
        files = [];
      });
    }
  }

  download() {
    this.apiService.download().subscribe();
  }
}
