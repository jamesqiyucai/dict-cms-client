import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModelExampleProposalTranslationComponent } from './ui-model-example-proposal-translation.component';

describe('UiModelExampleProposalTranslationComponent', () => {
  let component: UiModelExampleProposalTranslationComponent;
  let fixture: ComponentFixture<UiModelExampleProposalTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiModelExampleProposalTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiModelExampleProposalTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
