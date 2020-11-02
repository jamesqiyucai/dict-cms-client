import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExampleProposalComponent } from './service-example-proposal.component';

describe('ServiceExampleProposalComponent', () => {
  let component: ServiceExampleProposalComponent;
  let fixture: ComponentFixture<ServiceExampleProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceExampleProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExampleProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
