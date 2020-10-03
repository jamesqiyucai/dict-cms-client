import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { ViewableJournalSourceModel } from 'ui-model-source';

@Component({
  selector: 'lib-reviewable-journal-source',
  templateUrl: './journal-source-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewableJournalSourceComponent {
  @Input() public model: ViewableJournalSourceModel;
  public get editable(): boolean {
    return false;
  }
  public onAuthorChange(newAuthor: string): void {}
  public onTitleChange(newTitle: string): void {}
  public onPassageTitleChange(newTitle: string): void {}
  public onPageChange(newPage: string): void {}
  public onPublishDateChange(newDate: string): void {}
}
