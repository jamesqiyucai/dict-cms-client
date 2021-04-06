import { NgModule } from '@angular/core';
import { ExampleProposalSourceBookComponent } from './example-proposal-source-book-component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [ExampleProposalSourceBookComponent],
    imports: [
        CommonModule
    ],
  exports: [ExampleProposalSourceBookComponent]
})
export class ExampleProposalSourceBookModule { }
