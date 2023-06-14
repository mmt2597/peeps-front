import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEmailVerifyIndexComponent } from './pages-email-verify-index.component';

describe('PagesEmailVerifyIndexComponent', () => {
  let component: PagesEmailVerifyIndexComponent;
  let fixture: ComponentFixture<PagesEmailVerifyIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEmailVerifyIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEmailVerifyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
