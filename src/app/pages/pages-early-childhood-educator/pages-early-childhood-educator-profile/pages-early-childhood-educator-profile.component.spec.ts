import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyChildhoodEducatorProfileComponent } from './pages-early-childhood-educator-profile.component';

describe('PagesEarlyChildhoodEducatorProfileComponent', () => {
  let component: PagesEarlyChildhoodEducatorProfileComponent;
  let fixture: ComponentFixture<PagesEarlyChildhoodEducatorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyChildhoodEducatorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyChildhoodEducatorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
