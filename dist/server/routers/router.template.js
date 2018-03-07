"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class RouterTemplate {
    constructor() {
        this.router = express.Router();
        this.setRouters();
    }
    getRouter() {
        return this.router;
    }
}
exports.RouterTemplate = RouterTemplate;
//# sourceMappingURL=router.template.js.map