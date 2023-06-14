import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesChangePasswordIndexComponent } from './pages-change-password-index.component';

describe('PagesChangePasswordIndexComponent', () => {
  let component: PagesChangePasswordIndexComponent;
  let fixture: ComponentFixture<PagesChangePasswordIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesChangePasswordIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesChangePasswordIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
