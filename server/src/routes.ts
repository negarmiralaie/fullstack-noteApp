import { Express, Request, Response } from 'express';

function routes(app: Express) {
    app.post('/create-note', (req: Request, res: Response) => {
    
    });

    app.get('/get-note', (req: Request, res: Response) => {
        
    });

    app.delete('/delete-note', (req: Request, res: Response) => {
        
    });
};

export default routes;
