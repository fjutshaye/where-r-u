import { RouterTemplate } from './router.template';
import { IpGeoRouter } from './ipgeo/ipgeo.router';
import { RecordRouter } from './record/record.router';

export class ApiRouter extends RouterTemplate {
    protected setRouters() {
        this.router.use('/ipgeo', new IpGeoRouter().getRouter());
        this.router.use('/records', new RecordRouter().getRouter());
    }
}
