import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'lib-editable-book-source',
  templateUrl: './book-source-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableBookSourceComponent {
  @Input() public model;
  public setAuthor(newAuthor: string): void {}
  public onTitleChange(newTitle: string): void {}
  public onPageChange(newPage: string): void {}
  public onPublishedPlaceChange(newPlace: string): void {}
  public onPublishedYearChange(newYear: string): void {}
  public onInitialPublishYearChange(newYear: string): void {}
}
