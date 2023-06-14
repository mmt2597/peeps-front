import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEmailVerifiedIndexComponent } from './pages-email-verified-index.component';

describe('PagesEmailVerifiedIndexComponent', () => {
  let component: PagesEmailVerifiedIndexComponent;
  let fixture: ComponentFixture<PagesEmailVerifiedIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEmailVerifiedIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEmailVerifiedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
