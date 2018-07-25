import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss']
})
export class CardsGridComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1];

  constructor() {}

  ngOnInit() {}
}
