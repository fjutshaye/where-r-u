import { RouterTemplate } from '../router.template';
import { Record, RecordModel, saveRecord} from '../../models/record/record.model';
import * as http from 'http';
import * as rpn from 'request-promise-native';
import * as validate from 'validate-ip';

export class IpGeoRouter extends RouterTemplate {
    protected setRouters() {
        // POST IP address
        this.router.post('/', async function(req, res) {
            res.type('json');
            // let ip = "99.250.163.119";
            let ip = req.connection.remoteAddress;
            console.log(Date());
            console.log(ip);
            if(!validate(ip)){
                const resData: IIpgeoResponse = {
                    statusCode: 1,
                    statusMessage: "Invalid IP Address"
                }
                return res.send(resData);
            }
            const url = "http://freegeoip.net/json/" + ip;
            http.get(url, (fgeoRes)=>{
                let buffers = '';
                fgeoRes.on('data', (buffer) => buffers += buffer);
                fgeoRes.on('error', (error) => console.log(error));
                fgeoRes.on('end', () => {
                    let fgeoResponse: IIpgeoResponse = {
                        statusCode: fgeoRes.statusCode,
                        statusMessage: fgeoRes.statusMessage
                    }
                    if (fgeoRes.statusCode == 200) {
                        fgeoResponse.fgeo = JSON.parse(buffers);
                        // save record
                        saveRecord(fgeoResponse.fgeo);
                    }
                    res.send(fgeoResponse);
                });
            });
        });
    }
}

interface IIpgeoResponse {
    fgeo?: Record;
    statusCode?: number;
    statusMessage?: string;
}