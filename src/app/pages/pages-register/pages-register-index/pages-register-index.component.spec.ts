import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRegisterIndexComponent } from './pages-register-index.component';

describe('PagesRegisterIndexComponent', () => {
  let component: PagesRegisterIndexComponent;
  let fixture: ComponentFixture<PagesRegisterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesRegisterIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesRegisterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
