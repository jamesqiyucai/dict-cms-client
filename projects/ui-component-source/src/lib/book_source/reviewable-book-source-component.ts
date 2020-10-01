import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ViewableBookSourceModel} from 'ui-model-source';

@Component({
  selector: 'lib-reviewable-book-source',
  templateUrl: 'book-source-component.html'  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ReviewableBookSourceComponent {
 @Input() public model: ViewableBookSourceModel;
  public setAuthor(newAuthor: string): void {}
  public onTitleChange(newTitle: string): void {}
  public onPageChange(newPage: string): void {}
  public onPublishedPlaceChange(newPlace: string): void {}
  public onPublishedYearChange(newYear: string): void {}
  public onInitialPublishYearChange(newYear: string): void {}
  public get editable(): boolean {
   return false;
 }
}
