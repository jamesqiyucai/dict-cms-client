import {map} from 'rxjs/operators';
import {ExampleProposalTranslationModel} from './example-proposal-translation-model';
import {ExampleTranslationModelImpl} from 'ui-model-example-translation';
import {ExampleProposalTranslationHandle} from 'service-example-proposal-translation';

export class ExampleProposalTranslationModelImpl extends ExampleTranslationModelImpl implements ExampleProposalTranslationModel {
  protected _handle: ExampleProposalTranslationHandle;
  constructor(handle: ExampleProposalTranslationHandle) {
    super(handle);
  }
  public get textEmpty$() {
    return this.text$.pipe(map(text => !text));
  }
  public setText(newText: string) {
    if (newText != '') {
      this._handle.setTranslation(newText);
      this._textBuffer.next(null);
    } else {
      this._textBuffer.next(newText);
    }
  }
}
