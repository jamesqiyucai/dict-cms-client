import {SourceType} from "./source-type";

export interface SourceHandle {
  readonly type: SourceType;
  readonly editable: boolean;
}
