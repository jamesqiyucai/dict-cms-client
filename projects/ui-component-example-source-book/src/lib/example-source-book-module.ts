import { NgModule } from '@angular/core';
import { ExampleSourceBookComponent } from './example-source-book-component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [ExampleSourceBookComponent],
    imports: [
        CommonModule
    ],
  exports: [ExampleSourceBookComponent]
})
export class ExampleSourceBookModule { }
