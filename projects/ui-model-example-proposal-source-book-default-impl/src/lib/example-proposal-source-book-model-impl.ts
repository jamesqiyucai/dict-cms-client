import {map} from 'rxjs/operators';
import {ExampleProposalSourceBookModel} from 'ui-component-example-proposal-source-book';
import {ExampleSourceBookModelImpl} from 'ui-model-example-source-book-default-impl';
import {combineLatest} from 'rxjs';
import {ExampleProposalSourceBookDataModel} from 'ui-model-example-proposal-source-book';
import {makeEditable} from 'ui-model-editable';

class ExampleProposalSourceBookModelImplBase extends ExampleSourceBookModelImpl {
  protected _handle: ExampleProposalSourceBookDataModel;
  constructor(handle: ExampleProposalSourceBookDataModel) {
    super(handle);
  }
  public get authorEmpty$() {
    return this.author$.pipe(map(author => !author));
  }
  public get titleEmpty$() {
    return this.title$.pipe(map(title => !title));
  }
  public get pageEmpty$() {
    return this.page$.pipe(map(page => !page));
  }
  public get initialPublishYearEmpty$() {
    return this.initialPublishYear$.pipe(map(year => !year));
  }
  public get initialPublishYearInFuture$() {
    return this.initialPublishYear$.pipe(map(year => {
      return parseInt(year, 10) > new Date().getFullYear();
    }));
  }
  public get publishPlaceEmpty$() {
    return this.publishPlace$.pipe(map(place => !place));
  }
  public get publishYearEmpty$() {
    return this.publishYear$.pipe(map(year => !year));
  }
  public get publishYearInFuture$() {
    return this.publishYear$.pipe(map(year => {
      return parseInt(year, 10) > new Date().getFullYear();
    }));
  }
  public get validationFail$() {
    return combineLatest([
      this.authorEmpty$,
      this.titleEmpty$,
      this.pageEmpty$,
      this.initialPublishYearEmpty$,
      this.initialPublishYearInFuture$,
      this.publishPlaceEmpty$,
      this.publishYearEmpty$,
      this.publishYearInFuture$,
    ]).pipe(map(validators => {
      return validators.includes(true);
    }));
  }
  public setAuthor(newAuthor: string) {
    if (newAuthor !== '') {
      this._handle.setAuthor(newAuthor);
      this._authorBuffer$.next(null);
    } else {
      this._authorBuffer$.next(newAuthor);
    }
  }
  public setTitle(newTitle: string) {
    if (newTitle !== '') {
      this._handle.setTitle(newTitle);
      this._titleBuffer$.next(null);
    } else {
      this._titleBuffer$.next(newTitle);
    }
  }
  public setPage(newPage: string) {
    if (newPage !== '') {
      this._handle.setPage(newPage);
      this._pageBuffer$.next(null);
    } else {
      this._pageBuffer$.next(newPage);
    }
  }
  public setInitialPublishYear(newYear: string) {
    if (newYear !== '' && parseInt(newYear, 10) <= new Date().getFullYear()) {
      this._handle.setInitialPublishYear(newYear);
      this._initialPublishingYearBuffer$.next(null);
    } else {
      this._initialPublishingYearBuffer$.next(newYear);
    }
  }
  public setPublishYear(newYear: string) {
    if (newYear !== '' && parseInt(newYear, 10) <= new Date().getFullYear()) {
      this._handle.setPublishYear(newYear);
      this._publishedYearBuffer$.next(null);
    } else {
      this._publishedYearBuffer$.next(newYear);
    }
  }
  public setPublishPlace(newPlace: string) {
    if (newPlace !== '') {
      this._handle.setPublishPlace(newPlace);
      this._publishedPlaceBuffer$.next(null);
    } else {
      this._publishedPlaceBuffer$.next(newPlace);
    }
  }
}

export const ExampleProposalSourceBookModelImpl: (new (...args: any[]) => ExampleProposalSourceBookModel) = makeEditable(ExampleProposalSourceBookModelImplBase);
