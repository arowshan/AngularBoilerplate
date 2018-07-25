import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apis/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filterForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      item1: [false],
      item2: [false],
      item3: [false]
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}
