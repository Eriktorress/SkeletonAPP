import { TestBed } from '@angular/core/testing';

import { AuthGardService } from './auth-gard.service';

describe('AuthGardService', () => {
  let service: AuthGardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
