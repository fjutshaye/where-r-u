"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const api_1 = require("./routers/api");
const database_config_1 = require("./configs/database.config");
class App {
    constructor() {
        this.express = express();
        this.setupMiddleWares();
        this.setupRoutes();
    }
    setupMiddleWares() {
        console.log('setting middle wares');
        this.express.use(bodyParser.json());
        database_config_1.default.getConnection();
    }
    setupRoutes() {
        this.express.use('/api', new api_1.ApiRouter().getRouter());
        this.express.use('/', express.static(path.join(__dirname, '../public')));
        this.express.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../public/index.html')); });
        console.log('settting routers');
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map