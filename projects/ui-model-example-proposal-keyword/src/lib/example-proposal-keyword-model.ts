import { Observable } from 'rxjs';
import {ExampleKeywordModel} from 'ui-model-example-keyword';

export interface ExampleProposalKeywordModel extends ExampleKeywordModel {
  readonly textEmpty$: Observable<boolean>;
  readonly validationFail$: Observable<boolean>;
  setText(newText: string): void;
}
