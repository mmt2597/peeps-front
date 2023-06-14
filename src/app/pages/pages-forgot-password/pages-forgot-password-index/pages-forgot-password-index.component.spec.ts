import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesForgotPasswordIndexComponent } from './pages-forgot-password-index.component';

describe('PagesForgotPasswordIndexComponent', () => {
  let component: PagesForgotPasswordIndexComponent;
  let fixture: ComponentFixture<PagesForgotPasswordIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesForgotPasswordIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesForgotPasswordIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
