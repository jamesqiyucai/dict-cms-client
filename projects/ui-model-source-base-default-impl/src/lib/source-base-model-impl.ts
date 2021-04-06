import {SourceBaseModel} from 'ui-component-source-base';
import {SourceType} from 'ui-model-source-type';

export abstract class SourceBaseModelImpl implements SourceBaseModel {
  readonly type: SourceType;
  protected constructor(type: SourceType) {
    this.type = type;
  }
}
