import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithImageComponent } from './card-with-image.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardWithImageComponent', () => {
  let component: CardWithImageComponent;
  let fixture: ComponentFixture<CardWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardWithImageComponent, TruncatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
