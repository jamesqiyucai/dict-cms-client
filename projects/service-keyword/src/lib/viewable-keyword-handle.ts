import { Observable } from 'rxjs';

export interface ViewableKeywordHandle {
  readonly keyword$: Observable<string>;
}
