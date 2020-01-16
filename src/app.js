const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongodb = require('mongodb')



// All about mongoDB

  const MongoClient = mongodb.MongoClient
  const connectionURL = 'mongodb+srv://benjamn:tannga11@minyan-0trd4.mongodb.net/test?retryWrites=true&w=majority'
  const databaseName = 'Minyan'

  MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
     
    if (err) {
        return console.log(err)
    }
     console.log('mongodb - ON')
  })

          
// All about Express

// Create Asset Static File for Express
const publicDir = path.join(__dirname, '../public')

// Execute the asset static - express
app.use(express.static(publicDir))


// Fetch the mongoDB DATA
app.get('/query', async (req, res) => {
  const pick = Object.keys(req.query)[0]

  MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
     
    if (err) {
        return console.log(err)
    }
    const db = client.db(databaseName)
    db.collection('testing').find({street: pick}).toArray((err, user) => {
      res.send(user)
    })
  })
})
// Fetch the mongoDB DATA


// Insert Documents to MongoDB Server
app.get('/insertMany', async (req, res) => {

  MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
     
    if (err) {
        return console.log(err)
    }
    const db = client.db(databaseName)
    db.collection('testing').insert([
      {
        "street" : "טו",
        "shahrit" : "07:00 - 08:00",
        "minha" : "13:15 - 13:35",
        "arvit" : "17:15 - 17:30",
        "name" : "היכל נפתלי",
        "shabata": "0600 - 0700",
        "shabatb": "1300- 1400",
        "shabatc": "1700 - 1800"
    },
    
    {
        "street" : "טו",
        "shahrit" : "07:00 - 08:00",
        "minha" : "13:15 - 13:35",
        "arvit" : "17:15 - 17:30",
        "name" : "בבו שלום עליכם",
        "shabata": "0600 - 0700",
        "shabatb": "1300- 1400",
        "shabatc": "1700 - 1800"
    }
  ])
  })
  res.send('Insert Sucess')
})
// Insert Documents to MongoDB Server



// Load the contact Page
app.get('/contact', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/contact/index.html'))
  } catch (e) {
    res.status(400).send(e)
  }
})


app.listen(port, () => console.log('express - ON'))

// All about Express