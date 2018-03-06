import { RouterTemplate } from '../router.template';

export class IpGeo extends RouterTemplate {
    protected setRouters() {

        // POST IP address
        this.router.post('/', function(req, res) {
            console.log(req.ip);
            res.type('json').send({ip: req.ip});
        })
    }
}