import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminRoleQuestionsAddEditComponent } from './pages-system-admin-role-questions-add-edit.component';

describe('PagesSystemAdminRoleQuestionsAddEditComponent', () => {
  let component: PagesSystemAdminRoleQuestionsAddEditComponent;
  let fixture: ComponentFixture<PagesSystemAdminRoleQuestionsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminRoleQuestionsAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminRoleQuestionsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
