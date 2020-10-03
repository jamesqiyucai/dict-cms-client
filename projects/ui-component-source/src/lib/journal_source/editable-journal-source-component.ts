import { EditableJournalSourceModel } from 'ui-model-source';
import { Input } from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'lib-editable-journal-source',
  templateUrl: 'journal-source-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableJournalSourceComponent {
  @Input() public model: EditableJournalSourceModel;
  public get editable(): boolean {
    return this.model.editable;
  }
  public onAuthorChange(newAuthor: string): void {
    this.model.setAuthor(newAuthor);
  }
  public onTitleChange(newTitle: string): void {
    this.model.setJournalTitle(newTitle);
  }
  public onPassageTitleChange(newTitle: string): void {
    this.model.setPassageTitle(newTitle);
  }
  public onPageChange(newPage: string): void {
    this.model.setPage(newPage);
  }
  public onPublishDateChange(newDate: string): void {
    this.model.setPublishDate(newDate);
  }
}
