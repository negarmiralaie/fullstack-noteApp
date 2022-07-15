import { Document } from 'mongoose';

export interface NoteField {
    title: string,
    description: string,
};

export interface NoteDocument extends NoteField, Document {
    createdAt: Date,
    updatedAt: Date,
};