import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminJobSearchComponent } from './pages-system-admin-job-search.component';

describe('PagesSystemAdminJobSearchComponent', () => {
  let component: PagesSystemAdminJobSearchComponent;
  let fixture: ComponentFixture<PagesSystemAdminJobSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminJobSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
