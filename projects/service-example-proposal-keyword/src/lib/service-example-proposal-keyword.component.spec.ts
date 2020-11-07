import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExampleProposalKeywordComponent } from './service-example-proposal-keyword.component';

describe('ServiceExampleProposalKeywordComponent', () => {
  let component: ServiceExampleProposalKeywordComponent;
  let fixture: ComponentFixture<ServiceExampleProposalKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceExampleProposalKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExampleProposalKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
