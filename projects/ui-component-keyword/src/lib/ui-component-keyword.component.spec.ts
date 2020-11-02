import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponentKeywordComponent } from './ui-component-keyword.component';

describe('UiComponentKeywordComponent', () => {
  let component: UiComponentKeywordComponent;
  let fixture: ComponentFixture<UiComponentKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponentKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponentKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
