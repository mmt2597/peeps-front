import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSetupRoleIndexComponent } from './pages-setup-role-index.component';

describe('PagesSetupRoleIndexComponent', () => {
  let component: PagesSetupRoleIndexComponent;
  let fixture: ComponentFixture<PagesSetupRoleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSetupRoleIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSetupRoleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
