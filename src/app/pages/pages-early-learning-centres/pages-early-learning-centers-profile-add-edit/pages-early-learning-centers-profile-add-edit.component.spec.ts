import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentersProfileAddEditComponent } from './pages-early-learning-centers-profile-add-edit.component';

describe('PagesEarlyLearningCentersProfileAddEditComponent', () => {
  let component: PagesEarlyLearningCentersProfileAddEditComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentersProfileAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentersProfileAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentersProfileAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
