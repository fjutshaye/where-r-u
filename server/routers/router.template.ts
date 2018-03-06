import * as express from 'express';

export abstract class RouterTemplate {
    constructor(){
        this.router = express.Router();
        this.setRouters();
    }
    protected router: express.Router;
    protected abstract setRouters();
    public getRouter(): express.Router {
        return this.router;
    }
}