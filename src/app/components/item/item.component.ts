import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Receiving params from URL

    // If param is part of the main route
    // let id = this.activatedRoute.snapshot.paramMap.get('id');

    // If param is the child route
    let id = this.activatedRoute.snapshot.firstChild.paramMap.get('id');
  }

}
