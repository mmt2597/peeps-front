import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEarlyLearningCentresCentersProfileComponent } from './pages-early-learning-centres-centers-profile.component';

describe('PagesEarlyLearningCentresCentersProfileComponent', () => {
  let component: PagesEarlyLearningCentresCentersProfileComponent;
  let fixture: ComponentFixture<PagesEarlyLearningCentresCentersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEarlyLearningCentresCentersProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEarlyLearningCentresCentersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
