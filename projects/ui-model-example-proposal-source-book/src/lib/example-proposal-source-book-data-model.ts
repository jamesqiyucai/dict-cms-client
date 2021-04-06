import {ExampleSourceBookDataModel} from 'ui-model-example-source-book';

export interface ExampleProposalSourceBookDataModel extends ExampleSourceBookDataModel {
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setInitialPublishYear(newYear: string): void;
  setPublishYear(newYear: string): void;
  setPublishPlace(newPlace: string): void;
}
