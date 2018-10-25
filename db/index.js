var config = require('../config');
var MongoClient = require('mongodb').MongoClient;


//var db;
//var collection;
MongoClient.connect(config.MONGO_URL, { useNewUrlParser: true }, (err, database) => {
    if(!err) throw err;

    var db = database.db('devdeck101');

    db.collection('users').findOne({}, function (findErr, result) {
        if (findErr) throw findErr;
        console.log(result.name);
        database.close();
    });


    //     console.log('Connection established to MongoDB');
    //     db = database;
    //     collection = db.collection('users');
    // return console.log('Not possible to established the connection to MongoDB');
        
        
    
    // const client = (async() => {

    //     await MongoClient.connect(config.MONGO_URL, { useNewUrlParser: true });
    //     const db = client.db();
    //     await db.dropDatabase();
    
    // })();
    
    
 });


module.exports = {
    register: (data, handler) => {
        collection.insertOne(data, (err, result) => {
            handler(err, result);
        })
    }
}
