import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPricingIndexComponent } from './pages-pricing-index.component';

describe('PagesPricingIndexComponent', () => {
  let component: PagesPricingIndexComponent;
  let fixture: ComponentFixture<PagesPricingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesPricingIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPricingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
