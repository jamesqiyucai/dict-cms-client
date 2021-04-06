import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProposalComponent } from './example-proposal-component';

describe('UiComponentExampleProposalComponent', () => {
  let component: ExampleProposalComponent;
  let fixture: ComponentFixture<ExampleProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
