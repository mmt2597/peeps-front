import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminLayoutComponent } from './pages-system-admin-layout.component';

describe('PagesSystemAdminLayoutComponent', () => {
  let component: PagesSystemAdminLayoutComponent;
  let fixture: ComponentFixture<PagesSystemAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
