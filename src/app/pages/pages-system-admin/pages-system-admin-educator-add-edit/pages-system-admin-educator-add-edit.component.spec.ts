import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminEducatorAddEditComponent } from './pages-system-admin-educator-add-edit.component';

describe('PagesSystemAdminEducatorAddEditComponent', () => {
  let component: PagesSystemAdminEducatorAddEditComponent;
  let fixture: ComponentFixture<PagesSystemAdminEducatorAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminEducatorAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminEducatorAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
