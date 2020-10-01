import {SourceFactory} from "../source-factory";
import {ViewableJournalSourceModel} from "./viewable-journal-source-model";
import {ReviewableJournalSourceHandle, SourceType} from "service-source";
import {ViewableJournalSourceModelImpl} from "./viewable-journal-source-model-impl";

function isViewableJournalSourceHandle(handle: unknown): handle is ReviewableJournalSourceHandle {
  return handle && (handle as ReviewableJournalSourceHandle).type == SourceType.Journal && (handle as ReviewableJournalSourceHandle).editable == false;
}

export class ViewableJournalSourceModelFactory implements SourceFactory {
  createSource(handle: unknown): ViewableJournalSourceModel | null {
    return isViewableJournalSourceHandle(handle) ? new ViewableJournalSourceModelImpl(handle) : null;
  }
}
