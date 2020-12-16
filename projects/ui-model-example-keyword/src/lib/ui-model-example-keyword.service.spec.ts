import { TestBed } from '@angular/core/testing';

import { UiModelExampleKeywordService } from './ui-model-example-keyword.service';

describe('UiModelExampleKeywordService', () => {
  let service: UiModelExampleKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiModelExampleKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
