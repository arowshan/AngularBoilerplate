import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGridComponent } from './cards-grid.component';
import { CardWithImageComponent } from '../card-with-image/card-with-image.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardsGridComponent', () => {
  let component: CardsGridComponent;
  let fixture: ComponentFixture<CardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardsGridComponent, CardWithImageComponent, TruncatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
