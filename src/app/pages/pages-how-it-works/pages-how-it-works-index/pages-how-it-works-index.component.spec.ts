import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHowItWorksIndexComponent } from './pages-how-it-works-index.component';

describe('PagesHowItWorksIndexComponent', () => {
  let component: PagesHowItWorksIndexComponent;
  let fixture: ComponentFixture<PagesHowItWorksIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesHowItWorksIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesHowItWorksIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
