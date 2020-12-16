import { TestBed } from '@angular/core/testing';

import { UiModelExampleProposalKeywordService } from './ui-model-example-proposal-keyword.service';

describe('UiModelExampleProposalKeywordService', () => {
  let service: UiModelExampleProposalKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiModelExampleProposalKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
