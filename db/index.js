var config = require('../config');
var MongoClient = require('mongodb').MongoClient;

var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    // BSON = require('mongodb').pure().BSON,
    assert = require('assert');



    // Connect using the connection string
  MongoClient.connect(config.MONGO_URL, { useNewUrlParser: true }, {native_parser:true}, function(err, db) {
    assert.equal(null, err);

    db.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
      assert.equal(null, err);
      assert.equal(1, result);

      db.close();
    });
  });


//var db;
//var collection;
// MongoClient.connect(config.MONGO_URL, { useNewUrlParser: true }, (err, database) => {
//     if(!err) return someCallback(err);

//     var db = database.db('devdeck101');
//     console.log(db);

//     db.collection('users').findOne({}, function (findErr, result) {
//         if (findErr) return someCallback(findErr);
//         // console.log(result);
//         database.close();
//     });


    //     console.log('Connection established to MongoDB');
    //     db = database;
    //     collection = db.collection('users');
    // return console.log('Not possible to established the connection to MongoDB');
        
        
    
    // const client = (async() => {

    //     await MongoClient.connect(config.MONGO_URL, { useNewUrlParser: true });
    //     const db = client.db();
    //     await db.dropDatabase();
    
    // })();
    
    
//  });


module.exports = {
    register: (data, handler) => {
        collection.insertOne(data, (err, result) => {
            handler(err, result);
        })
    }
}
