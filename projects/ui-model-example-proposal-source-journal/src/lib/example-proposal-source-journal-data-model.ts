import {ExampleSourceJournalDataModel} from 'ui-model-example-source-journal';

export interface ExampleProposalSourceJournalDataModel extends ExampleSourceJournalDataModel {
  setAuthor(newAuthor: string): void;
  setJournalTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setPassageTitle(newTitle: string): void;
  setPublishDate(newDate: string): void;
}
