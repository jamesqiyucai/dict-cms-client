import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSourceBookComponent } from './example-source-book-component';

describe('UiComponentExampleSourceBookComponent', () => {
  let component: ExampleSourceBookComponent;
  let fixture: ComponentFixture<ExampleSourceBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSourceBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSourceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
