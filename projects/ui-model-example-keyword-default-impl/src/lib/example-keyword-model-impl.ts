import {mergeMap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ExampleKeywordModel} from 'ui-component-example-keyword';
import {ExampleKeywordDataModel} from 'ui-model-example-keyword';

export class ExampleKeywordModelImpl implements ExampleKeywordModel {

  protected readonly _handle: ExampleKeywordDataModel;
  protected readonly _textBuffer$: BehaviorSubject<string>;

  constructor(handle: ExampleKeywordDataModel) {
    this._handle = handle;
    this._textBuffer$ = new BehaviorSubject<string>(null);
  }
  public get text$(): Observable<string> {
    return this._textBuffer$.asObservable().pipe(
      mergeMap(text => {
        if (text != null) {
          return of(text);
        } else {
          return this._handle.keyword$;
        }
      })
    );
  }
}
