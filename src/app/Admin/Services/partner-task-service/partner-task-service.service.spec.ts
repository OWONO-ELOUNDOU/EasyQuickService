import { TestBed } from '@angular/core/testing';

import { PartnerTaskServiceService } from './partner-task-service.service';

describe('PartnerTaskServiceService', () => {
  let service: PartnerTaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerTaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
