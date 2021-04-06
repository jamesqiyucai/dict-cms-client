import {map} from 'rxjs/operators';
import {ExampleProposalTranslationModel} from 'ui-component-example-proposal-translation';
import {ExampleTranslationModelImpl} from 'ui-model-example-translation-default-impl';
import {ExampleProposalTranslationDataModel} from 'ui-model-example-proposal-translation';
import {makeEditable} from 'ui-model-editable';

export class ExampleProposalTranslationModelImplBase extends ExampleTranslationModelImpl {
  protected _handle: ExampleProposalTranslationDataModel;
  constructor(handle: ExampleProposalTranslationDataModel) {
    super(handle);
  }
  public get textEmpty$() {
    return this.text$.pipe(map(text => !text));
  }
  public setText(newText: string) {
    if (newText != '') {
      this._handle.setText(newText);
      this._textBuffer.next(null);
    } else {
      this._textBuffer.next(newText);
    }
  }
}

export const ExampleProposalTranslationModelImpl: (new (...args: any[]) => ExampleProposalTranslationModel) = makeEditable(ExampleProposalTranslationModelImplBase);
