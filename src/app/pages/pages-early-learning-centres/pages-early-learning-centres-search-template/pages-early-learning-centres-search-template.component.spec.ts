import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresSearchTemplateComponent } from './pages-early-learning-centres-search-template.component';

describe('PagesEarlyLearningCentresSearchTemplateComponent', () => {
  let component: PagesEarlyLearningCentresSearchTemplateComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresSearchTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresSearchTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresSearchTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
