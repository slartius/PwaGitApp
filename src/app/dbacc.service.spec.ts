import { TestBed } from '@angular/core/testing';

import { DbaccService } from './dbacc.service';

describe('DbaccService', () => {
  let service: DbaccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbaccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
