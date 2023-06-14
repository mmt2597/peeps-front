import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresChangePasswordComponent } from './pages-early-learning-centres-change-password.component';

describe('PagesEarlyLearningCentresChangePasswordComponent', () => {
  let component: PagesEarlyLearningCentresChangePasswordComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
