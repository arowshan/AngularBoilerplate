import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    'http://www.gstatic.com/webp/gallery/1.jpg',
    'http://www.gstatic.com/webp/gallery/2.jpg',
    'http://www.gstatic.com/webp/gallery/3.jpg'
  ];

  currentImageIndex;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // Check if any images, set first one
    if (this.images.length > 0) {
      this.currentImageIndex = 0;
    }
  }

  next() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  previous() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  openImageDialog(data): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { image: data }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
