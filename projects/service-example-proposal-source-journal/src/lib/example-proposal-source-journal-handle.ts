import {ExampleSourceJournalHandle} from 'service-example-source-journal';

export interface ExampleProposalSourceJournalHandle extends ExampleSourceJournalHandle {
  setAuthor(newAuthor: string): void;
  setJournalTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setPassageTitle(newTitle: string): void;
  setPublishDate(newDate: string): void;
}
