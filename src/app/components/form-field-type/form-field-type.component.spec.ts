import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldTypeComponent } from './form-field-type.component';

describe('FormFieldTypeComponent', () => {
  let component: FormFieldTypeComponent;
  let fixture: ComponentFixture<FormFieldTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
