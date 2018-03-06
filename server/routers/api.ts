import { RouterTemplate } from './router.template';
import { IpGeo } from './ipgeo/ipgeo';

export class ApiRouter extends RouterTemplate {
    protected setRouters() {
        this.router.use('/ipgeo', new IpGeo().getRouter());
    }
}
