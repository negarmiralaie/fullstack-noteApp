import { Schema, model } from 'mongoose';
import { customAlphabet } from 'nanoid';
import { NoteDocument } from '../utils/interfaces/note.interface';

// const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

const noteSchema = new Schema(
  {
    // noteId: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     default: () => `note_${nanoid()}`,
    // },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const NoteModel = model<NoteDocument>("NoteSchema", noteSchema);
export default NoteModel;
