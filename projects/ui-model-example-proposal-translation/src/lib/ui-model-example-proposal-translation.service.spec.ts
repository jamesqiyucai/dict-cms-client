import { TestBed } from '@angular/core/testing';

import { UiModelExampleProposalTranslationService } from './ui-model-example-proposal-translation.service';

describe('UiModelExampleProposalTranslationService', () => {
  let service: UiModelExampleProposalTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiModelExampleProposalTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
