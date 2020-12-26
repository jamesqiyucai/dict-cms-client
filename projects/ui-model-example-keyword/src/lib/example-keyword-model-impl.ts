import {ExampleKeywordModel} from './example-keyword-model';
import {BehaviorSubject} from 'rxjs';
import {ExampleKeywordHandle} from 'service-example-keyword';

export class ExampleKeywordModelImpl implements ExampleKeywordModel {
  protected _text: string;
  protected _text$: BehaviorSubject<string>;
  private readonly _handle?: ExampleKeywordHandle;
  constructor(handle?: ExampleKeywordHandle) {
    this._text = '';
    this._text$ = new BehaviorSubject<string>('');
    if (handle) {
      this._handle = handle;
    }
  }
  public get text$() {
    return this._text$.asObservable();
  }
  public set text(newText: string) {

  }
}
