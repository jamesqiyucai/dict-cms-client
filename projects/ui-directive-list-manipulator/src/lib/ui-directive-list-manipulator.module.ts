import { NgModule } from '@angular/core';
import { ListManipulatorDirective } from './list-manipulator.directive';
import { ListManipulatorContainerComponent } from './list-manipulator-container/list-manipulator-container.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ListManipulatorDirective, ListManipulatorContainerComponent],
  imports: [
    DragDropModule,
    CommonModule
  ],
  exports: [ListManipulatorDirective]
})
export class UiDirectiveListManipulatorModule {}
