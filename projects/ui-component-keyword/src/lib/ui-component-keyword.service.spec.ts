import { TestBed } from '@angular/core/testing';

import { UiComponentKeywordService } from './ui-component-keyword.service';

describe('UiComponentKeywordService', () => {
  let service: UiComponentKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiComponentKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
