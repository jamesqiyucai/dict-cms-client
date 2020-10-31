import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModelTranslationComponent } from './ui-model-translation.component';

describe('UiModelTranslationComponent', () => {
  let component: UiModelTranslationComponent;
  let fixture: ComponentFixture<UiModelTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiModelTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiModelTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
