import { Observable } from 'rxjs';

export interface ViewableTranslationHandle {
    readonly translation$: Observable<string>;
}
