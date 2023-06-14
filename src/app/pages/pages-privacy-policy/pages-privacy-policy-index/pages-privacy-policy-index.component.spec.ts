import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPrivacyPolicyIndexComponent } from './pages-privacy-policy-index.component';

describe('PagesPrivacyPolicyIndexComponent', () => {
  let component: PagesPrivacyPolicyIndexComponent;
  let fixture: ComponentFixture<PagesPrivacyPolicyIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesPrivacyPolicyIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPrivacyPolicyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
