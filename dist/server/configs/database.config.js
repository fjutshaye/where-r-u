"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DatabaseConfig {
    constructor() {
        this.uri = 'mongodb://admin:admin@ds257808.mlab.com:57808/where-r-u';
        mongoose.connect(this.uri);
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function () {
            console.log('MongoDB Connection Established');
        });
    }
    getConnection() {
        return this.db;
    }
}
exports.default = new DatabaseConfig();
//# sourceMappingURL=database.config.js.map