import { NgModule } from '@angular/core';
import { ExampleSourceJournalComponent } from './example-source-journal-component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [ExampleSourceJournalComponent],
  imports: [
    CommonModule
  ],
  exports: [ExampleSourceJournalComponent]
})
export class ExampleSourceJournalModule { }
