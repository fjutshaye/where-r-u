import * as mongoose from 'mongoose';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

export class Record extends Typegoose {
    @prop({required: true})
    ip: string;

    @prop()
    city?: string;

    @prop()
    country_name?: string;

    @prop()
    region_name?: string;

    @prop()
    country_code?: string;

    @prop()
    region_code?: string;

    @prop()
    time_zone?: string;

    @prop()
    zip_code?: string;

    @prop()
    metro_code?: number;

    @prop()
    latitude?: number;

    @prop()
    longitude?: number;

    @prop({default: new Date()})
    date_time?: Date;
}

export const RecordModel = new Record().getModelForClass(Record, { existingMongoose: mongoose });
export async function saveRecord(r: Record) {
    let record = new RecordModel(r);
    record.date_time = new Date();
    await record.save().then(
        (value) => {
            console.log('fullfilled');
            console.log(value);
        },
        (reason) => {
            console.log('rejected');
            console.log(reason);
        }
    ).catch(
        (reason) => {
            console.log('error');
            console.log(reason);
        }
    );
}