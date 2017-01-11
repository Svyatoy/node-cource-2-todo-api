// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert TODO, ', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "Olegg Kekk",
    //     age: 26,
    //     location: "Odessa"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to add User, ', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});