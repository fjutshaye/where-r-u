import * as mongoose from 'mongoose';


class DatabaseConfig {

    private readonly uri = 'mongodb://admin:admin@ds257808.mlab.com:57808/where-r-u';

    private db: mongoose.Connection; 
    constructor() {
        mongoose.connect(this.uri);
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function() {
            console.log('MongoDB Connection Established');
        });
    }

    getConnection(): mongoose.Connection {
        return this.db;
    }
}


export default new DatabaseConfig();