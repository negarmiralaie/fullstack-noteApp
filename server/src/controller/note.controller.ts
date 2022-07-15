import { Request, Response, Router, NextFunction } from 'express';
import Controller from '../utils/interfaces/controller.interface';
import HttpException from '../utils/exception/http.exception';
// import logger from '@/utils/logger';
import NoteService from '../service/note.service';
// import { NoteService } from '../service/note.service';

// export async function createNoteHandler(req: Request, res: Response) {
//     try{
//         const note = await NoteService.createNote(req.body);
//     } catch(error: any) {
//         logger.error(error);
//         return res.status(400).json(error.message);
//     }
// };

class NoteController implements Controller {
    public path = '/notes';
    public router = Router();
    private NoteService = new NoteService();

    constructor() {
        this.initializeRoutes();
    };

    private initializeRoutes(): void {
        console.log('this.path', this.path)
        this.router.post(`${this.path}`, this.createNoteHandler);
    };

    private createNoteHandler = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const { title, description } = req.body;
            const note = await this.NoteService.createNote({ title, description });
            return res.status(201).json({ note });
        } catch (error: any) {
            next (new HttpException(400, error.message));
        };
    };
};

export default NoteController;
