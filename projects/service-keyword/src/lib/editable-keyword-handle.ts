import { ViewableKeywordHandle } from './viewable-keyword-handle';

export interface EditableKeywordHandle extends ViewableKeywordHandle {
  setKeyword(newKeyword: string): void;
}
