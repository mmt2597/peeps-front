import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLoginIndexComponent } from './pages-login-index.component';

describe('PagesLoginIndexComponent', () => {
  let component: PagesLoginIndexComponent;
  let fixture: ComponentFixture<PagesLoginIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesLoginIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesLoginIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
