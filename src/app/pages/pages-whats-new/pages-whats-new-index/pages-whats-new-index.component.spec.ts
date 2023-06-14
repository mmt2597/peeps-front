import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesWhatsNewIndexComponent } from './pages-whats-new-index.component';

describe('PagesWhatsNewIndexComponent', () => {
  let component: PagesWhatsNewIndexComponent;
  let fixture: ComponentFixture<PagesWhatsNewIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesWhatsNewIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesWhatsNewIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
