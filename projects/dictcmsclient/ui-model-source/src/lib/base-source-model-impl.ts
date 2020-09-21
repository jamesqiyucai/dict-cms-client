import {BaseSourceModel} from "./base-source-model";
import {SourceType} from "@dictcmsclient/service-source";
import {EditableModel} from "@dictcmsclient/ui-model-editable";

export abstract class BaseSourceModelImpl extends EditableModel implements BaseSourceModel {
  readonly type: SourceType;
  protected constructor(type: SourceType) {
    super();
    this.type = type;
  }
}
