import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminRoleQuestionsComponent } from './pages-system-admin-role-questions.component';

describe('PagesSystemAdminRoleQuestionsComponent', () => {
  let component: PagesSystemAdminRoleQuestionsComponent;
  let fixture: ComponentFixture<PagesSystemAdminRoleQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminRoleQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminRoleQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
