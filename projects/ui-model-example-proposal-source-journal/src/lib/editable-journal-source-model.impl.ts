import {ViewableJournalSourceModelImpl} from "../../../ui-model-example-source-journal/src/lib/viewable-journal-source-model-impl";
import {EditableJournalSourceModel} from "./editable-journal-source-model";
import {EditableJournalSourceHandle} from "service-source";
import {map} from "rxjs/operators";
import {combineLatest} from "rxjs";

export class EditableJournalSourceModelImpl extends ViewableJournalSourceModelImpl implements EditableJournalSourceModel {
  protected _handle: EditableJournalSourceHandle;
  constructor(handle: EditableJournalSourceHandle) {
    super(handle);
  }

  setAuthor(newAuthor: string): void {
    if (newAuthor !== '') {
      this._handle.setAuthor(newAuthor);
      this._authorBuffer$.next(null);
    } else {
      this._authorBuffer$.next(newAuthor);
    }
  }

  setJournalTitle(newTitle: string): void {
    if (newTitle !== '') {
      this._handle.setJournalTitle(newTitle);
      this._titleBuffer$.next(null);
    } else {
      this._titleBuffer$.next(newTitle);
    }
  }

  setPage(newPage: string): void {
    if (newPage !== '') {
      this._handle.setPage(newPage);
      this._pageBuffer$.next(null);
    } else {
      this._pageBuffer$.next(newPage);
    }
  }

  setPassageTitle(newTitle: string): void {
    if (newTitle !== '') {
      this._handle.setPassageTitle(newTitle);
      this._passageTitleBuffer$.next(null);
    } else {
      this._passageTitleBuffer$.next(newTitle);
    }
  }

  setPublishDate(newDate: string): void {
    const selectedDate = new Date(newDate);
    const now = new Date();
    if (newDate !== '' && selectedDate < now) {
      this._handle.setPublishDate(newDate);
      this._publishDateBuffer$.next(null);
    } else {
      this._publishDateBuffer$.next(newDate);
    }
  }

  get authorEmpty() {
    return this.author$.pipe(map(author => !author));
  }

  get journalTitleEmpty() {
    return this.journalTitle$.pipe(map(title => !title));
  }

  get pageEmpty() {
    return this.page$.pipe(map(page => !page));
  }

  get passageTitleEmpty() {
    return this.passageTitle$.pipe(map(title => !title));
  }

  get publishDateEmpty() {
    return this.publishDate$.pipe(map(date => !date));
  }

  get publishDateInFuture() {
    return this.publishDate$.pipe(map(date => new Date(date) > new Date()));
  }

  get validationNotPass() {
    return combineLatest([
      this.authorEmpty,
      this.journalTitleEmpty,
      this.pageEmpty,
      this.passageTitleEmpty,
      this.publishDateEmpty,
      this.publishDateInFuture
    ]).pipe(map(validators => {
      return validators.includes(true);
    }));
  }
}
