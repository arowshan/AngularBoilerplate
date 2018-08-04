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
}
