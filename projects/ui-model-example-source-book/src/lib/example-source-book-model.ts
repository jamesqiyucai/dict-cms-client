import {Observable} from 'rxjs';
import { BaseSourceModel } from 'ui-model-source';

export interface ExampleSourceBookModel extends BaseSourceModel {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
}
