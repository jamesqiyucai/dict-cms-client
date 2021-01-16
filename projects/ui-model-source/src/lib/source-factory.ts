import {SourceHandle} from 'service-source';
import {BaseSourceModel} from "./base-source-model";

export interface SourceFactory {
  getSource(handle: SourceHandle): BaseSourceModel | null;
}
