import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresSearchHistoryComponent } from './pages-early-learning-centres-search-history.component';

describe('PagesEarlyLearningCentresSearchHistoryComponent', () => {
  let component: PagesEarlyLearningCentresSearchHistoryComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresSearchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresSearchHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
