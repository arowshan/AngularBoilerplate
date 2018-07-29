import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLinksComponent } from './sidenav-links.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidenavLinksComponent', () => {
  let component: SidenavLinksComponent;
  let fixture: ComponentFixture<SidenavLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavLinksComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
