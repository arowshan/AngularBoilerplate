import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMainLayoutComponent } from './side-main-layout.component';

describe('SideMainLayoutComponent', () => {
  let component: SideMainLayoutComponent;
  let fixture: ComponentFixture<SideMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMainLayoutComponent ]
    })
    .compileComponents();
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
