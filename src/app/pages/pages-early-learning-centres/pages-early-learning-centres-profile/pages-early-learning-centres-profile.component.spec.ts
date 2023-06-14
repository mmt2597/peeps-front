import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresProfileComponent } from './pages-early-learning-centres-profile.component';

describe('PagesEarlyLearningCentresProfileComponent', () => {
  let component: PagesEarlyLearningCentresProfileComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
