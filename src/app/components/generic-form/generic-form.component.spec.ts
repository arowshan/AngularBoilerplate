import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormComponent } from './generic-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../services/auth-guard/auth.service';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GenericFormComponent', () => {
  let component: GenericFormComponent;
  let fixture: ComponentFixture<GenericFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenericFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AuthService, FormBuilder],
      imports: [
        NoopAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form as invalid initially/when empty due to required fields', () => {
    expect(component.form.valid).toBeFalsy();
  });
});
