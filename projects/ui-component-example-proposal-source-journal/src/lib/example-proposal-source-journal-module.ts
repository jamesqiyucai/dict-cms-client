import { NgModule } from '@angular/core';
import { ExampleProposalSourceJournalComponent } from './example-proposal-source-journal-component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [ExampleProposalSourceJournalComponent],
  imports: [
    CommonModule
  ],
  exports: [ExampleProposalSourceJournalComponent]
})
export class ExampleProposalSourceJournalModule { }
