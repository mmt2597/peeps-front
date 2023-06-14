import { TestBed } from '@angular/core/testing';

import { ChargebeeService } from './chargebee.service';

describe('ChargebeeService', () => {
  let service: ChargebeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargebeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
