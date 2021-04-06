import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProposalSourceJournalComponent } from './example-proposal-source-journal-component';

describe('UiComponentExampleProposalSourceJournalComponent', () => {
  let component: ExampleProposalSourceJournalComponent;
  let fixture: ComponentFixture<ExampleProposalSourceJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleProposalSourceJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleProposalSourceJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
