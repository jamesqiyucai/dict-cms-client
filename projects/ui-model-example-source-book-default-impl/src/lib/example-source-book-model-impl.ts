import {ExampleSourceBookModel} from 'ui-component-example-source-book';
import {SourceBaseModelImpl} from 'ui-model-source-base-default-impl';
import {ExampleSourceBookDataModel} from 'ui-model-example-source-book';
import {SourceType} from 'ui-model-source-type';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

export class ExampleSourceBookModelImpl extends SourceBaseModelImpl implements ExampleSourceBookModel {

  protected _handle: ExampleSourceBookDataModel;
  protected readonly _authorBuffer$: BehaviorSubject<string | null>;
  protected readonly _titleBuffer$: BehaviorSubject<string | null>;
  protected readonly _pageBuffer$: BehaviorSubject<string | null>;
  protected readonly _initialPublishingYearBuffer$: BehaviorSubject<string | null>;
  protected readonly _publishedYearBuffer$: BehaviorSubject<string | null>;
  protected readonly _publishedPlaceBuffer$: BehaviorSubject<string | null>;

  constructor(handle: ExampleSourceBookDataModel) {
    super(SourceType.Book);
    this._authorBuffer$ = new BehaviorSubject<string | null>(null);
    this._titleBuffer$ = new BehaviorSubject<string>(null);
    this._pageBuffer$ = new BehaviorSubject<string>(null);
    this._initialPublishingYearBuffer$ = new BehaviorSubject<string>(null);
    this._publishedYearBuffer$ = new BehaviorSubject<string>(null);
    this._publishedPlaceBuffer$ = new BehaviorSubject<string>(null);
    this._handle = handle;
  }

  public get author$(): Observable<string> {
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
  public get title$(): Observable<string> {
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
  public get page$(): Observable<string> {
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
  public get initialPublishYear$(): Observable<string> {
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
  public get publishYear$(): Observable<string> {
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
  public get publishPlace$(): Observable<string> {
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
