import {SourceHandle} from "./source-handle";
import {Observable} from "rxjs";

export interface ReviewableBookSourceHandle extends SourceHandle {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
}
