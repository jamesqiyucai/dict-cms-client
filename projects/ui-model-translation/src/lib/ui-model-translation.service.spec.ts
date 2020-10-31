import { TestBed } from '@angular/core/testing';

import { UiModelTranslationService } from './ui-model-translation.service';

describe('UiModelTranslationService', () => {
  let service: UiModelTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiModelTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
