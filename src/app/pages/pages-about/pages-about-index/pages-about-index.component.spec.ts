import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAboutIndexComponent } from './pages-about-index.component';

describe('PagesAboutIndexComponent', () => {
  let component: PagesAboutIndexComponent;
  let fixture: ComponentFixture<PagesAboutIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesAboutIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesAboutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
