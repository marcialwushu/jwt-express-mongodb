var config = require('../config');
var MongoClient = require('mongodb').MongoClient;


var db;
var collection;
MongoClient.connect(config.MONGO_URL, { useNewUrlParser: true }, (err, database) => {
    // if(!err){
    //     console.log('Connection established to MongoDB');
    //     db = database;
    //     //collection = db.collection('users');
    // } else {
    //     console.log('Not possible to established the connection to MongoDB')
        
    // }
    const client = (async() => {

        await MongoClient.connect(config.MONGO_URL, { useNewUrlParser: true });
        const db = client.db();
        await db.dropDatabase();
    
    })();
    
    
 });


module.exports = {
    register: (data, handler) => {
        collection.insertOne(data, (err, result) => {
            handler(err, result);
        })
    }
}
