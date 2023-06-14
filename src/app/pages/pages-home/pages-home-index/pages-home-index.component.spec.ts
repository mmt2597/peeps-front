import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHomeIndexComponent } from './pages-home-index.component';

describe('PagesHomeIndexComponent', () => {
  let component: PagesHomeIndexComponent;
  let fixture: ComponentFixture<PagesHomeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesHomeIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesHomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
