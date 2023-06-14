import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminHelpCentreAddEditComponent } from './pages-system-admin-help-centre-add-edit.component';

describe('PagesSystemAdminHelpCentreAddEditComponent', () => {
  let component: PagesSystemAdminHelpCentreAddEditComponent;
  let fixture: ComponentFixture<PagesSystemAdminHelpCentreAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminHelpCentreAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminHelpCentreAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
