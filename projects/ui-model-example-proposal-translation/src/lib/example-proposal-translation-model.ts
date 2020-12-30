import {Observable} from 'rxjs';
import {ExampleTranslationModel} from 'ui-model-example-translation';

export interface ExampleProposalTranslationModel extends ExampleTranslationModel {
  readonly textEmpty$: Observable<boolean>;
  setText(newText: string): void;
}
