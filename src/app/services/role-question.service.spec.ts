import { TestBed } from '@angular/core/testing';

import { RoleQuestionService } from './role-question.service';

describe('RoleQuestionService', () => {
  let service: RoleQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
