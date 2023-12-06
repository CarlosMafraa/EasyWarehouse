import { TestBed } from '@angular/core/testing';

import { ArmazemService } from './armazem.service';

describe('ArmazemService', () => {
  let service: ArmazemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmazemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
