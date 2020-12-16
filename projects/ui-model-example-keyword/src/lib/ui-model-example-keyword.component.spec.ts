import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModelExampleKeywordComponent } from './ui-model-example-keyword.component';

describe('UiModelExampleKeywordComponent', () => {
  let component: UiModelExampleKeywordComponent;
  let fixture: ComponentFixture<UiModelExampleKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiModelExampleKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiModelExampleKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
