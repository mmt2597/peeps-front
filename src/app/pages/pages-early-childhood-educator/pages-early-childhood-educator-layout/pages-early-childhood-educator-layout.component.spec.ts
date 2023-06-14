import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyChildhoodEducatorLayoutComponent } from './pages-early-childhood-educator-layout.component';

describe('PagesEarlyChildhoodEducatorLayoutComponent', () => {
  let component: PagesEarlyChildhoodEducatorLayoutComponent;
  let fixture: ComponentFixture<PagesEarlyChildhoodEducatorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyChildhoodEducatorLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyChildhoodEducatorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
