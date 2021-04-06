import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProposalSourceBookComponent } from './example-proposal-source-book-component';

describe('UiComponentExampleProposalSourceBookComponent', () => {
  let component: ExampleProposalSourceBookComponent;
  let fixture: ComponentFixture<ExampleProposalSourceBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleProposalSourceBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleProposalSourceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
