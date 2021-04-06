import {Observable} from 'rxjs';
import {SourceBaseDataModel} from 'ui-model-source-base';

export interface ExampleSourceBookDataModel extends SourceBaseDataModel {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
}
