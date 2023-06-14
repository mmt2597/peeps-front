import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminEducatorComponent } from './pages-system-admin-educator.component';

describe('PagesSystemAdminEducatorComponent', () => {
  let component: PagesSystemAdminEducatorComponent;
  let fixture: ComponentFixture<PagesSystemAdminEducatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminEducatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminEducatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
