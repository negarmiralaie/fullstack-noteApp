import { Express, Request, Response } from 'express';
import { createNoteHandler, getNoteHandler, deleteNoteHandler } from './controller/note.controller';

function routes(app: Express) {
    app.post('/create-note', deleteNoteHandler);
    app.get('/get-note', getNoteHandler);
    app.delete('/delete-note', createNoteHandler);
};

export default routes;
