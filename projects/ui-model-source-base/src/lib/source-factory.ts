import {SourceBaseModel} from 'ui-component-source-base';
import {SourceBaseDataModel} from './source-base-data-model';

export interface SourceFactory {
  getSource(handle: SourceBaseDataModel): SourceBaseModel | null;
}
