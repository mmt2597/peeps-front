import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElcMenuComponent } from './elc-menu.component';

describe('ElcMenuComponent', () => {
  let component: ElcMenuComponent;
  let fixture: ComponentFixture<ElcMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElcMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElcMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
