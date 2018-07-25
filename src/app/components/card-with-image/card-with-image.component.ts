import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-with-image',
  templateUrl: './card-with-image.component.html',
  styleUrls: ['./card-with-image.component.scss']
})
export class CardWithImageComponent implements OnInit {
  text = `The Shiba Inu is the smallest of the six original and distinct
  spitz breeds of dog from Japan. A small, agile dog that copes very well
  with mountainous terrain, the Shiba Inu was originally bred for hunting.`;

  constructor() {}

  ngOnInit() {}
}
