import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMainLayoutComponent } from './side-main-layout.component';
import { FiltersComponent } from '../../filters/filters.component';
import { CardsGridComponent } from '../../cards-grid/cards-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

describe('SideMainLayoutComponent', () => {
  let component: SideMainLayoutComponent;
  let fixture: ComponentFixture<SideMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideMainLayoutComponent,
        FiltersComponent,
        CardsGridComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
