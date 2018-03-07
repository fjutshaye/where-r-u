import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import { ApiRouter } from './routers/api';
import databaseConfig from './configs/database.config';


class App {
    // ref to Express instance
    public express: express.Application;

    constructor() {
        this.express = express();
        this.setupMiddleWares();
        this.setupRoutes();
    }

    protected setupMiddleWares(): void {
        console.log('setting middle wares');
        this.express.use(bodyParser.json());
        databaseConfig.getConnection();
    }
    protected setupRoutes(): void {
        this.express.use('/api', new ApiRouter().getRouter());
        this.express.use('/', express.static(path.join(__dirname, '../public')));
        this.express.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html')); });
        console.log('settting routers');
    }
}

export default new App().express;
