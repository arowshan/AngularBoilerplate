import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {

  tiles: Tile[] = [
    {cols: 3, rows: 1, color: 'lightblue'},
    {cols: 1, rows: 2, color: 'lightgreen'},
    {cols: 1, rows: 1, color: 'lightpink'},
    {cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}