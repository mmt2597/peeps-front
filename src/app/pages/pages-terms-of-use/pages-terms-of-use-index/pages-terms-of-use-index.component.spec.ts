import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTermsOfUseIndexComponent } from './pages-terms-of-use-index.component';

describe('PagesTermsOfUseIndexComponent', () => {
  let component: PagesTermsOfUseIndexComponent;
  let fixture: ComponentFixture<PagesTermsOfUseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesTermsOfUseIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTermsOfUseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
