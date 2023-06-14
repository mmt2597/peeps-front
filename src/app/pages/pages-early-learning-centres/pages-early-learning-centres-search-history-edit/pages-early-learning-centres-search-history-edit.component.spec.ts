import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresSearchHistoryEditComponent } from './pages-early-learning-centres-search-history-edit.component';

describe('PagesEarlyLearningCentresSearchHistoryEditComponent', () => {
  let component: PagesEarlyLearningCentresSearchHistoryEditComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresSearchHistoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresSearchHistoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresSearchHistoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
