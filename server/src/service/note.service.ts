// import { DocumentDefinition } from 'mongoose';
import NoteModel from '../model/note.model';

// export async function createNote(note: DocumentDefinition<NoteDocument>) {
//     try{
//         return await NoteModel.create(note);
//     } catch (error: any) {
//         throw new Error(error);
//     }
// }

// import NoteModel from '../model/note.model';

class NoteService {
    // private note = NoteModel;
    
    public async createNote (note: any) {
        try{
            // return await this.note.create(note);
            return await NoteModel.create(note);
        } catch (error: any) {
            throw new Error(error);
        };
    };
};

export default NoteService;