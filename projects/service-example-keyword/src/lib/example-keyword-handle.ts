import { Observable } from 'rxjs';

export interface ExampleKeywordHandle {
  readonly keyword$: Observable<string>;
}
