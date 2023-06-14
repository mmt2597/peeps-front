import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminWhatsNewAddEditComponent } from './pages-system-admin-whats-new-add-edit.component';

describe('PagesSystemAdminWhatsNewAddEditComponent', () => {
  let component: PagesSystemAdminWhatsNewAddEditComponent;
  let fixture: ComponentFixture<PagesSystemAdminWhatsNewAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminWhatsNewAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminWhatsNewAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
