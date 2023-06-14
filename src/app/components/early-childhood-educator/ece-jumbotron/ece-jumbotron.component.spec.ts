import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EceJumbotronComponent } from './ece-jumbotron.component';

describe('EceJumbotronComponent', () => {
  let component: EceJumbotronComponent;
  let fixture: ComponentFixture<EceJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EceJumbotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EceJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
