import { ViewableTranslationHandle } from './viewable-translation-handle';

export interface EditableTranslationHandle extends ViewableTranslationHandle {
    setTranslation(newTranslation: string): void;
}
