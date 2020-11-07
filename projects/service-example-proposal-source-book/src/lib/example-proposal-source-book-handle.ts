import {ExampleSourceBookHandle} from 'service-example-source-book';

export interface ExampleProposalSourceBookHandle extends ExampleSourceBookHandle {
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setInitialPublishYear(newYear: string): void;
  setPublishYear(newYear: string): void;
  setPublishPlace(newPlace: string): void;
}
