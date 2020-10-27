import { NgModule } from '@angular/core';
import { ListManipulatorDirective } from './list-manipulator.directive';
import { ListManipulatorContainerComponent } from './list-manipulator-container/list-manipulator-container.component';

@NgModule({
  declarations: [ListManipulatorDirective, ListManipulatorContainerComponent],
  imports: [
  ],
  exports: [ListManipulatorDirective]
})
export class UiDirectiveListManipulatorModule { }
