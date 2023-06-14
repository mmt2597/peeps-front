import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesThankYouIndexComponent } from './pages-thank-you-index.component';

describe('PagesThankYouIndexComponent', () => {
  let component: PagesThankYouIndexComponent;
  let fixture: ComponentFixture<PagesThankYouIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesThankYouIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesThankYouIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
