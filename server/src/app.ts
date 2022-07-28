import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import Controller from '../src/utils/interfaces/controller.interface';
import ErrorMiddleware from '../src/middleware/error.middleware';
// import engine from 'consolidate';
import helmet from 'helmet';

class App {
    public express: Application;
    public port: number;

    constructor (contollers: Controller[], port: number) {
        this.express = express();
        this.port = port;

        this.initializeDatabaseConnection();
        this.initializeMiddlewares();
        this.initializeControllers(contollers);
        this.initializeErrorHandling();
    };

    private initializeMiddlewares (): void {
        this.express.use(helmet());
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(compression());
        // let path: Object;
        // path = ;
        // this.express.set('view engine', 'html');
        // this.express.engine('html', require('ejs').renderFile);
        // this.express.set('views', __dirname + '/public');
        // this.express.engine('html', engine.mustache);
        this.express.set('view engine', 'html');
        this.express.use(express.static(__dirname + 'public'));
    };

    private initializeControllers (contollers: Controller[]): void {
        contollers.forEach((controller: Controller) => {
            // console.log('controller.router', controller.router)
            this.express.use('/', controller.router);
        });
    };

    private initializeErrorHandling (): void {
        this.express.use(ErrorMiddleware);
    };

    private initializeDatabaseConnection (): void {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        mongoose.connect(
            // `mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`,
            'mongodb+srv://negarm:negarm@cluster0.ioovc.mongodb.net/notepad?retryWrites=true&w=majority',
        );
    };

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App is listening on port ${this.port}`);
        })
    };
};

export default App;