import { Request, Response } from 'express';
import logger from '../utils/logger';

export function createNoteHandler(req: Request, res: Response) {
    try{

    } catch(error) {
        logger.error(error);
        return res.status(400).json(error.message);
    }
}