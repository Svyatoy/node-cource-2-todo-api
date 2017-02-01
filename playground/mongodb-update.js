const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');
    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('587658ff5591dc9f8b0f23ec')
    }, {
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });
    // db.close();
});
