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
const http = require("http");
class IpGeo extends router_template_1.RouterTemplate {
    setRouters() {
        // POST IP address
        this.router.post('/', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                res.type('json');
                console.log(req.ip);
                let ip = "99.250.163.119";
                const url = "http://freegeoip.net/json/" + ip;
                yield http.get(url, (fgeoRes) => {
                    let buffers = '';
                    fgeoRes.on('data', (buffer) => buffers += buffer);
                    fgeoRes.on('error', (error) => console.log(error));
                    fgeoRes.on('end', () => {
                        console.log(fgeoRes);
                        let response = {
                            statusCode: fgeoRes.statusCode,
                            statusMessage: fgeoRes.statusMessage
                        };
                        if (fgeoRes.statusCode == 200) {
                            response.fgeo = JSON.parse(buffers);
                        }
                        res.send(response);
                    });
                });
                // res.type('json').send({url:`freegeoip.net/json/${ip}`});
            });
        });
    }
}
exports.IpGeo = IpGeo;
//# sourceMappingURL=ipgeo.js.map