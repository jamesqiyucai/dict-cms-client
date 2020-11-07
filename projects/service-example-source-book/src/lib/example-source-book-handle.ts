import {SourceHandle} from 'service-source';
import {Observable} from 'rxjs';

export interface ExampleSourceBookHandle extends SourceHandle {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
}
