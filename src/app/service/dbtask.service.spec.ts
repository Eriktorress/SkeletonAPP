import { TestBed } from '@angular/core/testing';

import { DbtaskService } from './dbtask.service';

describe('DbtaskService', () => {
  let service: DbtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
