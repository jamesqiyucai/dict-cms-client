import { TestBed } from '@angular/core/testing';

import { UiComponentTranslationService } from './ui-component-translation.service';

describe('UiComponentTranslationService', () => {
  let service: UiComponentTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiComponentTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
