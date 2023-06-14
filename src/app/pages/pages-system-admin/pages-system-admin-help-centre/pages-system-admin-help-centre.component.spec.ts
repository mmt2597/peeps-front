import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminHelpCentreComponent } from './pages-system-admin-help-centre.component';

describe('PagesSystemAdminHelpCentreComponent', () => {
  let component: PagesSystemAdminHelpCentreComponent;
  let fixture: ComponentFixture<PagesSystemAdminHelpCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminHelpCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminHelpCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
