import {mergeMap} from 'rxjs/operators';
import {BehaviorSubject, of} from 'rxjs';
import {ExampleTranslationModel} from 'ui-component-example-translation';
import {ExampleTranslationDataModel} from 'ui-model-example-translation';

export class ExampleTranslationModelImpl implements ExampleTranslationModel {
  protected _textBuffer: BehaviorSubject<string | null>;
  protected _handle: ExampleTranslationDataModel;
  constructor(handle: ExampleTranslationDataModel) {
    this._handle = handle;
  }
  public get text$() {
    return this._textBuffer.asObservable().pipe(mergeMap(text => text != null ? of(text) : this._handle.text$));
  }
}
