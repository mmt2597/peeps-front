import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresEducatorSearchComponent } from './pages-early-learning-centres-educator-search.component';

describe('PagesEarlyLearningCentresEducatorSearchComponent', () => {
  let component: PagesEarlyLearningCentresEducatorSearchComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresEducatorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresEducatorSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresEducatorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
