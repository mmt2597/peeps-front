import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesContactIndexComponent } from './pages-contact-index.component';

describe('PagesContactIndexComponent', () => {
  let component: PagesContactIndexComponent;
  let fixture: ComponentFixture<PagesContactIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesContactIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesContactIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
