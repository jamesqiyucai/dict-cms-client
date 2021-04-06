import {Observable} from 'rxjs';
import {SourceBaseModel} from 'ui-component-source-base';

export interface ExampleSourceBookModel extends SourceBaseModel {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
}
