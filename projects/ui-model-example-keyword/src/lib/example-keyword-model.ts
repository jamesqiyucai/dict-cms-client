import {Observable} from 'rxjs';

export interface ExampleKeywordModel {
  readonly text$: Observable<string>;
}
