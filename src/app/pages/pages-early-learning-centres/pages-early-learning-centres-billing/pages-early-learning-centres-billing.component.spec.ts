import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresBillingComponent } from './pages-early-learning-centres-billing.component';

describe('PagesEarlyLearningCentresBillingComponent', () => {
  let component: PagesEarlyLearningCentresBillingComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
