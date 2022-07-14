import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createNote } from '../service/note.service';

export async function createNoteHandler(req: Request, res: Response) {
    try{
        const note = await createNote(req.body);
    } catch(error: any) {
        logger.error(error);
        return res.status(400).json(error.message);
    }
}