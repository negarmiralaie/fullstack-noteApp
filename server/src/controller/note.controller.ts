import { Request, Response, Router, NextFunction } from 'express';
import Controller from '../utils/interfaces/controller.interface';
import HttpException from '../utils/exception/http.exception';
import NoteService from '../service/note.service';

class NoteController implements Controller {
    public path = '/notes';
    public router = Router();
    private NoteService = new NoteService();

    constructor() {
        this.initializeRoutes();
    };

    private initializeRoutes(): void {
        console.log('this.path', this.path)
        this.router.post(`${this.path}/create`, this.createNoteHandler);
        this.router.put(`${this.path}/edit`, this.editNoteHandler);
        this.router.post(`${this.path}/search`, this.searchNoteHandler);
        this.router.delete(`${this.path}/delete`, this.deleteNoteHandler);
    };

    private createNoteHandler = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const { title, description } = req.body;
            console.log(req.body)
            const note = await this.NoteService.createNote({ title, description });
            return res.status(201).json({ note });
        } catch (error: any) {
            next (new HttpException(400, error.message));
        };
    };

    private editNoteHandler = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const { prevTitle, title, description } = req.body;
            const note = await this.NoteService.editNote({ prevTitle, title, description });
            return res.status(201).json({ note });

        } catch (error: any) {
            next (new HttpException(400, error.message));
        };
    };

    private deleteNoteHandler = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const { title } = req.body;
            const note = await this.NoteService.deleteNote( title );
            return res.status(201).json({ note });
        } catch (error: any) {
            next (new HttpException(400, error.message));
        };
    };

    private searchNoteHandler = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const { title } = req.body;
            const note = await this.NoteService.searchNote( title );
            return res.status(201).json({ note });
        } catch (error: any) {
            next (new HttpException(400, error.message));
        };
    };
};

export default NoteController;
