import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMainSideLayoutComponent } from './side-main-side-layout.component';

describe('SideMainSideLayoutComponent', () => {
  let component: SideMainSideLayoutComponent;
  let fixture: ComponentFixture<SideMainSideLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMainSideLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMainSideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
