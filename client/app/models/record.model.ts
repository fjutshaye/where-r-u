
export interface ISpot {
    ip: string;
    longitude?: number;
    latitude?: number;
    city?: string;
    region_name?: string;
    country_name?: string;
}
export interface IRGI {
    _id: ISpot;
    count: number;
}