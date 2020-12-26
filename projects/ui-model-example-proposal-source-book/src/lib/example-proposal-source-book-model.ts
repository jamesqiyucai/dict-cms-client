import {ExampleSourceBookModel} from 'ui-model-example-source-book';
import {Editable} from 'ui-model-editable';
import {Observable} from 'rxjs';

export interface ExampleProposalSourceBookModel extends Editable, ExampleSourceBookModel {
  readonly authorEmpty: Observable<boolean>;
  readonly titleEmpty: Observable<boolean>;
  readonly pageEmpty: Observable<boolean>;
  readonly initialPublishYearEmpty: Observable<boolean>;
  readonly initialPublishYearInFuture: Observable<boolean>;
  readonly publishYearEmpty: Observable<boolean>;
  readonly publishYearInFuture: Observable<boolean>;
  readonly publishPlaceEmpty: Observable<boolean>;
  readonly validationNotPass: Observable<boolean>;
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setInitialPublishYear(newYear: string): void;
  setPublishYear(newYear: string): void;
  setPublishPlace(newPlace: string): void;
}
