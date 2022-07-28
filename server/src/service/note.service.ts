import NoteModel from '../model/note.model';

class NoteService {
    
    public async createNote ({ title, description }: any) {
        try{
            return await NoteModel.create({ title, description });
        } catch (error: any) {
            throw new Error(error);
        };
    };

    public async editNote ({ prevTitle, title, description }: any) {
        try{
            return await NoteModel.findOneAndUpdate({ title: prevTitle }, { title, description });
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

    public async getAllTickets () {
        try{
            return await NoteModel.find();
        } catch (error: any) {
            throw new Error(error);
        };
    };
};

export default NoteService;