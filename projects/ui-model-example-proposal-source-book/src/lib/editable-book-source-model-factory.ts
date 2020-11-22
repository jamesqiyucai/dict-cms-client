import {SourceFactory} from "../../../ui-model-source/src/lib/source-factory";
import {EditableBookSourceHandle, SourceType} from "service-source";
import {EditableBookSourceModelImpl} from "./editable-book-source-model-impl";
import {EditableBookSourceModel} from "./editable-book-source-model";

function isEditableBookSourceHanlde(handle: unknown): handle is EditableBookSourceHandle {
  return handle && (handle as EditableBookSourceHandle).type == SourceType.Book && (handle as EditableBookSourceHandle).editable == true;
}

export class EditableBookSourceModelFactory implements SourceFactory {
  createSource(handle: unknown): EditableBookSourceModel | null {
    if (isEditableBookSourceHanlde(handle)) {
      return new EditableBookSourceModelImpl(handle);
    } else {
      return null;
    }
  }
}
