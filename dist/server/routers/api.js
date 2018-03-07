"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_template_1 = require("./router.template");
const ipgeo_router_1 = require("./ipgeo/ipgeo.router");
const record_router_1 = require("./record/record.router");
class ApiRouter extends router_template_1.RouterTemplate {
    setRouters() {
        this.router.use('/ipgeo', new ipgeo_router_1.IpGeoRouter().getRouter());
        this.router.use('/records', new record_router_1.RecordRouter().getRouter());
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=api.js.map