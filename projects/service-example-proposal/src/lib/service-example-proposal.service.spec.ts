import { TestBed } from '@angular/core/testing';

import { ServiceExampleProposalService } from './service-example-proposal.service';

describe('ServiceExampleProposalService', () => {
  let service: ServiceExampleProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExampleProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
