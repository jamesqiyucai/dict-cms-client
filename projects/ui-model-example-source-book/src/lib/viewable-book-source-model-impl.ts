import {ViewableBookSourceModel} from "./viewable-book-source-model";
import {BaseSourceModelImpl} from "../../../ui-model-source/src/lib/base-source-model-impl";
import {ReviewableBookSourceHandle, SourceType} from "service-source";
import {BehaviorSubject, of} from "rxjs";
import {mergeMap} from "rxjs/operators";

export class ViewableBookSourceModelImpl extends BaseSourceModelImpl implements ViewableBookSourceModel {

  protected _handle: ReviewableBookSourceHandle;
  protected readonly _authorBuffer$: BehaviorSubject<string | null>;
  protected readonly _titleBuffer$: BehaviorSubject<string>;
  protected readonly _pageBuffer$: BehaviorSubject<string>;
  protected readonly _initialPublishingYearBuffer$: BehaviorSubject<string>;
  protected readonly _publishedYearBuffer$: BehaviorSubject<string>;
  protected readonly _publishedPlaceBuffer$: BehaviorSubject<string>;

  constructor(handle: ReviewableBookSourceHandle) {
    super(SourceType.Book);
    this._authorBuffer$ = new BehaviorSubject<string | null>(null);
    this._titleBuffer$ = new BehaviorSubject<string>(null);
    this._pageBuffer$ = new BehaviorSubject<string>(null);
    this._initialPublishingYearBuffer$ = new BehaviorSubject<string>(null);
    this._publishedYearBuffer$ = new BehaviorSubject<string>(null);
    this._publishedPlaceBuffer$ = new BehaviorSubject<string>(null);
    this._handle = handle;
  }

  public get author$() {
    return this._authorBuffer$.asObservable().pipe(
      mergeMap(author => {
        if (author != null) {
          return of(author);
        } else {
          return this._handle.author$;
        }
      })
    );
  }
  public get title$() {
    return this._titleBuffer$.asObservable().pipe(
      mergeMap(title => {
        if (title != null) {
          return of(title);
        } else {
          return this._handle.title$;
        }
      })
    );
  }
  public get page$() {
    return this._pageBuffer$.asObservable().pipe(
      mergeMap(page => {
        if (page != null) {
          return of(page);
        } else {
          return this._handle.page$;
        }
      })
    );
  }
  public get initialPublishYear$() {
    return this._initialPublishingYearBuffer$.asObservable().pipe(
      mergeMap(year => {
        if (year != null) {
          return of(year);
        } else {
          return this._handle.initialPublishYear$;
        }
      })
    );
  }
  public get publishYear$() {
    return this._publishedYearBuffer$.asObservable().pipe(
      mergeMap(year => {
        if (year != null) {
          return of(year);
        } else {
          return this._handle.publishYear$;
        }
      })
    );
  }
  public get publishPlace$() {
    return this._publishedPlaceBuffer$.pipe(
      mergeMap(place => {
        if (place != null) {
          return of(place);
        } else {
          return this._handle.publishPlace$;
        }
      })
    );
  }
}
