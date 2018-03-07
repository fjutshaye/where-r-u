"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const record_model_1 = require("../../models/record/record.model");
const router_template_1 = require("../router.template");
class RecordRouter extends router_template_1.RouterTemplate {
    logger(title, body) {
        console.log(title + ":");
        console.log(body);
    }
    setRouters() {
        this.router.post('/', (req, res) => {
            this.logger('req.body', req.body);
            let record = new record_model_1.RecordModel(req.body);
            record_model_1.saveRecord(record);
            res.send(req.body);
        });
        // GET records grouped by IP : JSON
        this.router.get('/ip', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let aggregate = yield record_model_1.RecordModel.aggregate([
                { $group: { "_id": {
                            "ip": "$ip",
                            "longitude": "$longitude",
                            "latitude": "$latitude",
                            "city": "$city",
                            "region_name": "$region_name",
                            "country_name": "$country_name"
                        }, "count": { $sum: 1 } } }
            ]).then((value) => {
                console.log('GET /api/records/ip fullfilled');
                console.log(value);
                res.type('json').send({ records: value });
            }, (err) => {
                console.log('GET /api/records/ip error');
                console.log(err);
                res.type('json').send(err);
            });
        }));
    }
}
exports.RecordRouter = RecordRouter;
//# sourceMappingURL=record.router.js.map