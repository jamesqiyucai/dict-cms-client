import { NgModule } from '@angular/core';
import {ReviewableBookSourceComponent} from './book_source/reviewable-book-source-component';
import {EditableBookSourceComponent} from './book_source/editable-book-source-component';
import {ReviewableJournalSourceComponent} from './journal_source/reviewable-journal-source-component';
import {EditableJournalSourceComponent} from './journal_source/editable-journal-source-component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ReviewableBookSourceComponent,
    EditableBookSourceComponent,
    ReviewableJournalSourceComponent,
    EditableJournalSourceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewableBookSourceComponent,
    EditableBookSourceComponent,
    ReviewableJournalSourceComponent,
    EditableJournalSourceComponent
  ]
})
export class UiComponentSourceModule { }
