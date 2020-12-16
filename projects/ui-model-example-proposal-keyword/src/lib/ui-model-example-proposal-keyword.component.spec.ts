import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModelExampleProposalKeywordComponent } from './ui-model-example-proposal-keyword.component';

describe('UiModelExampleProposalKeywordComponent', () => {
  let component: UiModelExampleProposalKeywordComponent;
  let fixture: ComponentFixture<UiModelExampleProposalKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiModelExampleProposalKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiModelExampleProposalKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
