import { EditableBookSourceModel } from 'ui-model-source';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'lib-editable-book-source',
  templateUrl: './book-source-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableBookSourceComponent {
  @Input() public model: EditableBookSourceModel;
  public get editable(): boolean {
    return this.model.editable;
  }
  public setAuthor(newAuthor: string): void {
    this.model.setAuthor(newAuthor);
  }
  public onTitleChange(newTitle: string): void {
    this.model.setTitle(newTitle);
  }
  public onPageChange(newPage: string): void {
    this.model.setPage(newPage);
  }
  public onPublishedPlaceChange(newPlace: string): void {
    this.model.setPublishPlace(newPlace);
  }
  public onPublishedYearChange(newYear: string): void {
    this.model.setPublishYear(newYear);
  }
  public onInitialPublishYearChange(newYear: string): void {
    this.model.setInitialPublishYear(newYear);
  }
}
