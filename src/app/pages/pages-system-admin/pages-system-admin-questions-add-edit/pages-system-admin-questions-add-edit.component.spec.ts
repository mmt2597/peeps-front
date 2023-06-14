import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminQuestionsAddEditComponent } from './pages-system-admin-questions-add-edit.component';

describe('PagesSystemAdminQuestionsAddEditComponent', () => {
  let component: PagesSystemAdminQuestionsAddEditComponent;
  let fixture: ComponentFixture<PagesSystemAdminQuestionsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminQuestionsAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminQuestionsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
