import { Observable } from 'rxjs';

export interface ExampleTranslationHandle {
    readonly translation$: Observable<string>;
}
