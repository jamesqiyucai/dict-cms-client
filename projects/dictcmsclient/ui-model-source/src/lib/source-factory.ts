import {BaseSourceModel} from "./base-source-model";

export interface SourceFactory {
  createSource(handle: unknown): BaseSourceModel | null;
}
