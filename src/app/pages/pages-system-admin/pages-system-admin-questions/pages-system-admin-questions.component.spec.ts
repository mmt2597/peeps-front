import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminQuestionsComponent } from './pages-system-admin-questions.component';

describe('PagesSystemAdminQuestionsComponent', () => {
  let component: PagesSystemAdminQuestionsComponent;
  let fixture: ComponentFixture<PagesSystemAdminQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
