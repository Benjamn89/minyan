const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Minyan'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {

    if (err) {
        return console.log('Error to connect mongoDB')
    }

const db = client.db(databaseName)

db.collection('testing').insertOne({
name: 'Benny',
age: 30
})

    console.log('mongoDB: OK!')
})