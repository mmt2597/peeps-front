import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminLearningCenterComponent } from './pages-system-admin-learning-center.component';

describe('PagesSystemAdminLearningCenterComponent', () => {
  let component: PagesSystemAdminLearningCenterComponent;
  let fixture: ComponentFixture<PagesSystemAdminLearningCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminLearningCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminLearningCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
