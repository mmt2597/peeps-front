import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyChildhoodEducatorWorkExperienceComponent } from './pages-early-childhood-educator-work-experience.component';

describe('PagesEarlyChildhoodEducatorWorkExperienceComponent', () => {
  let component: PagesEarlyChildhoodEducatorWorkExperienceComponent;
  let fixture: ComponentFixture<PagesEarlyChildhoodEducatorWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyChildhoodEducatorWorkExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyChildhoodEducatorWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
