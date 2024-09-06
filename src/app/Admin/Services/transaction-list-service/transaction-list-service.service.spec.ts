import { TestBed } from '@angular/core/testing';

import { TransactionListServiceService } from './transaction-list-service.service';

describe('TransactionListServiceService', () => {
  let service: TransactionListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
