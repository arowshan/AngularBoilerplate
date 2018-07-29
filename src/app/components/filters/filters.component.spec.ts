import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../services/auth-guard/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule
      ],
      providers: [AuthService, FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
