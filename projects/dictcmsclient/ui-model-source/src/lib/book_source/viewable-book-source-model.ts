import {Observable} from "rxjs";
import {BookSourceModel} from "./book-source-model";

export interface ViewableBookSourceModel extends BookSourceModel {
  readonly author$: Observable<string>;
  readonly title$: Observable<string>;
  readonly page$: Observable<string>;
  readonly initialPublishYear$: Observable<string>;
  readonly publishYear$: Observable<string>;
  readonly publishPlace$: Observable<string>;
}
