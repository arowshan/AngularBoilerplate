import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscComponent } from './misc.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

describe('MiscComponent', () => {
  let component: MiscComponent;
  let fixture: ComponentFixture<MiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MiscComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [MatDialog],
      imports: [OverlayModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
