import { Component, OnInit } from '@angular/core';

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

  constructor() {}

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
}
