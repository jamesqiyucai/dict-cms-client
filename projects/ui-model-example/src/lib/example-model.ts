import {Observable} from 'rxjs';

export interface ExampleModel {
  readonly formattedText$: Observable<string>;
  readonly comment$: Observable<string>;
  readonly note$: Observable<string>;
  readonly keywords
}
