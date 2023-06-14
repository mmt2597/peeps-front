import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyChildhoodEducatorChangePasswordComponent } from './pages-early-childhood-educator-change-password.component';

describe('PagesEarlyChildhoodEducatorChangePasswordComponent', () => {
  let component: PagesEarlyChildhoodEducatorChangePasswordComponent;
  let fixture: ComponentFixture<PagesEarlyChildhoodEducatorChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyChildhoodEducatorChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyChildhoodEducatorChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
