import { TestBed } from '@angular/core/testing';

import { ServiceExampleProposalKeywordService } from './service-example-proposal-keyword.service';

describe('ServiceExampleProposalKeywordService', () => {
  let service: ServiceExampleProposalKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExampleProposalKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
