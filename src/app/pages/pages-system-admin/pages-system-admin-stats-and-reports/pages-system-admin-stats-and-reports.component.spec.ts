import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSystemAdminStatsAndReportsComponent } from './pages-system-admin-stats-and-reports.component';

describe('PagesSystemAdminStatsAndReportsComponent', () => {
  let component: PagesSystemAdminStatsAndReportsComponent;
  let fixture: ComponentFixture<PagesSystemAdminStatsAndReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSystemAdminStatsAndReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSystemAdminStatsAndReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
