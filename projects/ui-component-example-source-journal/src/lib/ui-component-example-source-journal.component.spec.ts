import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSourceJournalComponent } from './example-source-journal-component';

describe('UiComponentExampleSourceJournalComponent', () => {
  let component: ExampleSourceJournalComponent;
  let fixture: ComponentFixture<ExampleSourceJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSourceJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSourceJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
