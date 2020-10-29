import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManipulatorElementGeneratorComponent } from './list-manipulator-element-generator.component';

describe('ListManipulatorElementGeneratorComponent', () => {
  let component: ListManipulatorElementGeneratorComponent;
  let fixture: ComponentFixture<ListManipulatorElementGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManipulatorElementGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManipulatorElementGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
