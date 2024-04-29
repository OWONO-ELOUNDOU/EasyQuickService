import { TestBed } from '@angular/core/testing';

import { DohoneService } from './dohone.service';

describe('DohoneService', () => {
  let service: DohoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DohoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
