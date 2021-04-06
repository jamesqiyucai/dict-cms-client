import { Observable } from 'rxjs';

export interface ExampleKeywordDataModel {
  readonly keyword$: Observable<string>;
}
