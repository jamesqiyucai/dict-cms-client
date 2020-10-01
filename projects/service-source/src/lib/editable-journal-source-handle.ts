import {ReviewableJournalSourceHandle} from "./reviewable-journal-source-handle";

export interface EditableJournalSourceHandle extends ReviewableJournalSourceHandle {
  setAuthor(newAuthor: string): void;
  setJournalTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setPassageTitle(newTitle: string): void;
  setPublishDate(newDate: string): void;
}
