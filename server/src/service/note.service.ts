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
    
    public async createNote ({ title, description }: any) {
        try{
            // return await this.note.create(note);
            return await NoteModel.create({ title, description });
        } catch (error: any) {
            throw new Error(error);
        };
    };

    public async editNote ({ prevTitle, title, description }: any) {
        try{
            return await NoteModel.findOneAndUpdate({ title: prevTitle }, { title, description });
            // return await NoteModel.create(note);
        } catch (error: any) {
            throw new Error(error);
        };
    };

    public async deleteNote ( title : string ) {
        try{
            return await NoteModel.findOneAndDelete({ title });
        } catch (error: any) {
            throw new Error(error);
        };
    };

    public async searchNote ( title : string ) {
        try{
            return await NoteModel.findOne({ title });
        } catch (error: any) {
            throw new Error(error);
        };
    };
};

export default NoteService;