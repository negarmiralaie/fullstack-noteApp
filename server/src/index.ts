import 'dotenv/config';
// import 'module-alias/register';
import validateEnv from '../src/utils/validateEnv';
import App from './app';
import NoteController from './controller/note.controller';

validateEnv();

const app = new App(
    [ new NoteController() ],
    Number(process.env.PORT)
);

app.listen();