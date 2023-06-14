import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminUsersAddEditComponent } from './pages-system-admin-users-add-edit.component';

describe('PagesSystemAdminUsersAddEditComponent', () => {
  let component: PagesSystemAdminUsersAddEditComponent;
  let fixture: ComponentFixture<PagesSystemAdminUsersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminUsersAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminUsersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
