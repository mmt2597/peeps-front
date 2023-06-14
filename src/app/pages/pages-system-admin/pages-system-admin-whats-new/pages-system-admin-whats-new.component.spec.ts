import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminWhatsNewComponent } from './pages-system-admin-whats-new.component';

describe('PagesSystemAdminWhatsNewComponent', () => {
  let component: PagesSystemAdminWhatsNewComponent;
  let fixture: ComponentFixture<PagesSystemAdminWhatsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminWhatsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminWhatsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
