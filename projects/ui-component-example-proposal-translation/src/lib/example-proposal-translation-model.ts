import {Observable} from 'rxjs';
import {ExampleTranslationModel} from 'ui-component-example-translation';
import {Editable} from 'ui-model-editable';

export interface ExampleProposalTranslationModel extends ExampleTranslationModel, Editable {
  readonly textEmpty$: Observable<boolean>;
  setText(newText: string): void;
}
