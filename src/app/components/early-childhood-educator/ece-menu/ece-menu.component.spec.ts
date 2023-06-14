import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EceMenuComponent } from './ece-menu.component';

describe('EceMenuComponent', () => {
  let component: EceMenuComponent;
  let fixture: ComponentFixture<EceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EceMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
