"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const typegoose_1 = require("typegoose");
class Record extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Record.prototype, "ip", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Record.prototype, "city", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Record.prototype, "country_name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Record.prototype, "region_name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Record.prototype, "country_code", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Record.prototype, "region_code", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Record.prototype, "time_zone", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Record.prototype, "zip_code", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Record.prototype, "metro_code", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Record.prototype, "latitude", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Record.prototype, "longitude", void 0);
__decorate([
    typegoose_1.prop({ default: new Date() }),
    __metadata("design:type", Date)
], Record.prototype, "date_time", void 0);
exports.Record = Record;
exports.RecordModel = new Record().getModelForClass(Record, { existingMongoose: mongoose });
function saveRecord(r) {
    return __awaiter(this, void 0, void 0, function* () {
        let record = new exports.RecordModel(r);
        record.date_time = new Date();
        yield record.save().then((value) => {
            console.log('fullfilled');
            console.log(value);
        }, (reason) => {
            console.log('rejected');
            console.log(reason);
        }).catch((reason) => {
            console.log('error');
            console.log(reason);
        });
    });
}
exports.saveRecord = saveRecord;
//# sourceMappingURL=record.model.js.map