import {SourceFactory} from "../source-factory";
import {ViewableBookSourceModelImpl} from "./viewable-book-source-model-impl";
import {ReviewableBookSourceHandle, SourceHandle, SourceType} from "service-source";
import {ViewableBookSourceModel} from "./viewable-book-source-model";

function isViewableBookSourceHandle(handle: unknown): handle is ReviewableBookSourceHandle {
  return handle && (handle as SourceHandle).type == SourceType.Book && (handle as SourceHandle).editable == false;
}

export class ViewableBookSourceModelFactory implements SourceFactory {
  createSource(handle: unknown): ViewableBookSourceModel | null {
    if (isViewableBookSourceHandle(handle)) {
      return new ViewableBookSourceModelImpl(handle);
    } else {
      return null;
    }
  }

}
