import {map} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {ExampleProposalKeywordHandle} from 'service-example-proposal-keyword';
import {ExampleKeywordModelImpl} from 'ui-model-example-keyword';
import {ExampleProposalKeywordModel} from './example-proposal-keyword-model';

export class ExampleProposalKeywordModelImpl extends ExampleKeywordModelImpl implements ExampleProposalKeywordModel {

  protected readonly _handle: ExampleProposalKeywordHandle;

  constructor(handle: ExampleProposalKeywordHandle) {
    super(handle);
  }
  public setText(newText: string) {
    if (newText !== '') {
      this._handle.setKeyword(newText);
      this._textBuffer$.next(null);
    } else {
      this._textBuffer$.next(newText);
    }
  }
  public get textEmpty$() {
    return this.text$.pipe(map(text => !text));
  }
  public get validationFail$() {
    return combineLatest([
      this.textEmpty$
    ]).pipe(map(validators => {
      return validators.includes(true);
    }));
  }
}
