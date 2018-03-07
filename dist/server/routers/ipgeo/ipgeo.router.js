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
const router_template_1 = require("../router.template");
const record_model_1 = require("../../models/record/record.model");
const http = require("http");
const validate = require("validate-ip");
class IpGeoRouter extends router_template_1.RouterTemplate {
    setRouters() {
        // POST IP address
        this.router.post('/', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                res.type('json');
                // let ip = "99.250.163.119";
                let ip = req.ip;
                if (!validate(ip)) {
                    const resData = {
                        statusCode: 1,
                        statusMessage: "Invalid IP Address"
                    };
                    return res.send(resData);
                }
                const url = "http://freegeoip.net/json/" + ip;
                http.get(url, (fgeoRes) => {
                    let buffers = '';
                    fgeoRes.on('data', (buffer) => buffers += buffer);
                    fgeoRes.on('error', (error) => console.log(error));
                    fgeoRes.on('end', () => {
                        let fgeoResponse = {
                            statusCode: fgeoRes.statusCode,
                            statusMessage: fgeoRes.statusMessage
                        };
                        if (fgeoRes.statusCode == 200) {
                            fgeoResponse.fgeo = JSON.parse(buffers);
                            // save record
                            record_model_1.saveRecord(fgeoResponse.fgeo);
                        }
                        res.send(fgeoResponse);
                    });
                });
            });
        });
    }
}
exports.IpGeoRouter = IpGeoRouter;
//# sourceMappingURL=ipgeo.router.js.map