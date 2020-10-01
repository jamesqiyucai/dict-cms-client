import {BaseSourceModel} from "./base-source-model";
import {SourceType} from "service-source";
import {EditableModel} from "ui-model-editable";

export abstract class BaseSourceModelImpl extends EditableModel implements BaseSourceModel {
  readonly type: SourceType;
  protected constructor(type: SourceType) {
    super();
    this.type = type;
  }
}
