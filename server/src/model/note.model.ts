import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export interface NoteField {
    title: string,
    description: string,
};

export interface NoteDocument extends NoteField, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
};

const noteSchema = new mongoose.Schema(
  {
    noteId: {
        type: String,
        required: true,
        unique: true,
        default: () => `note_${nanoid()}`,
    },
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

const NoteModel = mongoose.model<NoteDocument>("NoteSchema", noteSchema);