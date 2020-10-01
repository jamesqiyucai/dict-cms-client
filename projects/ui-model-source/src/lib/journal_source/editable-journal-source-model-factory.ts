import {SourceFactory} from "../source-factory";
import {EditableJournalSourceModel} from "./editable-journal-source-model";
import {EditableJournalSourceHandle, SourceType} from "service-source";
import {EditableJournalSourceModelImpl} from "./editable-journal-source-model.impl";

function isEditableJournalSourceHandle(handle: unknown): handle is EditableJournalSourceHandle {
  return handle && (handle as EditableJournalSourceHandle).type == SourceType.Journal && (handle as EditableJournalSourceHandle).editable == true;
}

export class EditableJournalSourceModelFactory implements SourceFactory {
  createSource(handle: unknown): EditableJournalSourceModel | null {
    return isEditableJournalSourceHandle(handle) ? new EditableJournalSourceModelImpl(handle) : null;
  }
}
