import {map} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {ExampleKeywordModelImpl} from 'ui-model-example-keyword-default-impl';
import {ExampleProposalKeywordModel} from 'ui-component-example-proposal-keyword';
import {ExampleProposalKeywordDataModel} from 'ui-model-example-proposal-keyword';
import {makeEditable} from 'ui-model-editable';

export class ExampleProposalKeywordModelImplBase extends ExampleKeywordModelImpl {

  protected readonly _handle: ExampleProposalKeywordDataModel;

  constructor(handle: ExampleProposalKeywordDataModel) {
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

export const ExampleProposalKeywordModelImpl: (new (...args: any[]) => ExampleProposalKeywordModel) = makeEditable(ExampleProposalKeywordModelImplBase);
