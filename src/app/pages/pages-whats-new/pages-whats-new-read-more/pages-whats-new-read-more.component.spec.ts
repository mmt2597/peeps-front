import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesWhatsNewReadMoreComponent } from './pages-whats-new-read-more.component';

describe('PagesWhatsNewReadMoreComponent', () => {
  let component: PagesWhatsNewReadMoreComponent;
  let fixture: ComponentFixture<PagesWhatsNewReadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesWhatsNewReadMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesWhatsNewReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
