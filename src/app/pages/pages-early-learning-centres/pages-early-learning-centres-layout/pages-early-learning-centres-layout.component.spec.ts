import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresLayoutComponent } from './pages-early-learning-centres-layout.component';

describe('PagesEarlyLearningCentresLayoutComponent', () => {
  let component: PagesEarlyLearningCentresLayoutComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
