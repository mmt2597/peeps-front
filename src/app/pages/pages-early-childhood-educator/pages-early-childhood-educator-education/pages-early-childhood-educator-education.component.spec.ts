import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyChilddhoodEducatorEducationComponent } from './pages-early-childhood-educator-education.component';

describe('PagesEarlyChilddhoodEducatorEducationComponent', () => {
  let component: PagesEarlyChilddhoodEducatorEducationComponent;
  let fixture: ComponentFixture<PagesEarlyChilddhoodEducatorEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyChilddhoodEducatorEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyChilddhoodEducatorEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
