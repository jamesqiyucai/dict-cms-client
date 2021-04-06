import { Observable } from 'rxjs';
import {ExampleKeywordModel} from 'ui-component-example-keyword';
import {Editable} from 'ui-model-editable';

export interface ExampleProposalKeywordModel extends ExampleKeywordModel, Editable {
  readonly textEmpty$: Observable<boolean>;
  readonly validationFail$: Observable<boolean>;
  setText(newText: string): void;
}
