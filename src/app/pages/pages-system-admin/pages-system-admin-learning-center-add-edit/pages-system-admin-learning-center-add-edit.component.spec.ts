import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminLearningCenterAddEditComponent } from './pages-system-admin-learning-center-add-edit.component';

describe('PagesSystemAdminLearningCenterAddEditComponent', () => {
  let component: PagesSystemAdminLearningCenterAddEditComponent;
  let fixture: ComponentFixture<PagesSystemAdminLearningCenterAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminLearningCenterAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminLearningCenterAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
