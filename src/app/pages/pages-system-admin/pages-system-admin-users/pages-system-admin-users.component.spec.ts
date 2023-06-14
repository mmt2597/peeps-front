import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminUsersComponent } from './pages-system-admin-users.component';

describe('PagesSystemAdminUsersComponent', () => {
  let component: PagesSystemAdminUsersComponent;
  let fixture: ComponentFixture<PagesSystemAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
