import { TestBed } from '@angular/core/testing';

import { CenterProfileService } from './center-profile.service';

describe('CenterProfileService', () => {
  let service: CenterProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
