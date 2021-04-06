import {Observable} from 'rxjs';

export interface ExampleTranslationModel {
  readonly text$: Observable<string>;
}
