import { DocumentDefinition } from 'mongoose';
import NoteModel, { NoteDocument } from '../model/note.model';

export async function createNote(note: DocumentDefinition<NoteDocument>) {
    try{
        return await NoteModel.create(note);
    } catch (error: any) {
        throw new Error(error);
    }
}