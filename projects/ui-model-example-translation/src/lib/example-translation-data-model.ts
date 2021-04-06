import {Observable} from 'rxjs';

export interface ExampleTranslationDataModel {
  readonly text$: Observable<string>;
}
