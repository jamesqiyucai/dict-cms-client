import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManipulatorContainerComponent } from './list-manipulator-container.component';

describe('ListManipulatorContainerComponent', () => {
  let component: ListManipulatorContainerComponent;
  let fixture: ComponentFixture<ListManipulatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManipulatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManipulatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
