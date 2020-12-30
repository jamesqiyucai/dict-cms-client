import {mergeMap} from 'rxjs/operators';
import {ExampleTranslationHandle} from 'service-example-translation';
import {BehaviorSubject, of} from 'rxjs';
import {ExampleTranslationModel} from './example-translation-model';

export class ExampleTranslationModelImpl implements ExampleTranslationModel {
  protected _textBuffer: BehaviorSubject<string | null>;
  protected _handle: ExampleTranslationHandle;
  constructor(handle: ExampleTranslationHandle) {
    this._handle = handle;
  }
  public get text$() {
    return this._textBuffer.asObservable().pipe(mergeMap(text => text != null ? of(text) : this._handle.translation$));
  }
}
