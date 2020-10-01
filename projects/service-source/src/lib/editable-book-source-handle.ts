import {ReviewableBookSourceHandle} from "./reviewable-book-source-handle";

export interface EditableBookSourceHandle extends ReviewableBookSourceHandle {
  setAuthor(newAuthor: string): void;
  setTitle(newTitle: string): void;
  setPage(newPage: string): void;
  setInitialPublishYear(newYear: string): void;
  setPublishYear(newYear: string): void;
  setPublishPlace(newPlace: string): void;
}
