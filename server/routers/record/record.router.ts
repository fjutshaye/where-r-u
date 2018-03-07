import { RecordModel, Record, saveRecord } from '../../models/record/record.model';
import { RouterTemplate } from '../router.template';


export class RecordRouter extends RouterTemplate {
    private logger(title: string, body: any) {
        console.log(title + ":");
        console.log(body)
    }
    protected setRouters() {
        this.router.post('/', (req, res) => {
            this.logger('req.body', req.body);
            let record = new RecordModel(req.body);
            saveRecord(record);
            res.send(req.body);
        });
        // GET records grouped by IP : JSON
        this.router.get('/ip', async (req, res) => {
            let aggregate = await RecordModel.aggregate([
                {$group: {"_id": {
                    "ip": "$ip",
                    "longitude": "$longitude",
                    "latitude": "$latitude",
                    "city": "$city",
                    "region_name": "$region_name",
                    "country_name": "$country_name"
                }, "count": { $sum: 1 }}}     
            ]).then(
                (value) => {
                    console.log('GET /api/records/ip fullfilled');
                    console.log(value);
                    res.type('json').send({records: value});
                },
                (err) => {
                    console.log('GET /api/records/ip error');
                    console.log(err);
                    res.type('json').send(err);
                }
            )
        });
    }
}
