var config = require('../config');
var MongoClient = require('mongodb').MongoClient;


var db;
var collection;
MongoClient.connect(config.MONGO_URL, (err, database) => {
    if(!err){
        console.log('Connection established to MongoDB');
        db = database;
        collection = db.collection('users');
    } else {
        console.log('Not possible to established the connection to MongoDB')
    }
})
