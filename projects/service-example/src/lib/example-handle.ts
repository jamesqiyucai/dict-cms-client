import {SourceHandle} from 'service-source';
import {ExampleTranslationHandle} from 'service-example-translation';
import {ExampleKeywordHandle} from 'service-example-keyword';
import {List} from 'immutable';
import {Observable} from 'rxjs';

export interface ExampleHandle {
  $ID: Observable<number>;
  $text: Observable<string>;
  $keywords: Observable<List<ExampleKeywordHandle>>;
  $italics: Observable<List<[number, number]>>;
  $translations: Observable<List<ExampleTranslationHandle>;
  $note: Observable<string>;
  $comment: Observable<string>;
  $source: Observable<SourceHandle>;
}
