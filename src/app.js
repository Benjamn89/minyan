const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail')
require('dotenv').config()


// parse application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


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

// Load the contact Page
app.get('/contact', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/contact/index.html'))
  } catch (e) {
    res.status(400).send(e)
  }
})


app.post('/send-email', async (req, res) => {

  const theMsg = `<h1>Bellow will be the message</h1>
  <p>${req.body.contact}</p>
  <p>${req.body.street}</p>
  <p>${req.body.preytimes}</p>
  <p>${req.body.shabat}</p>
  <p>${req.body.information}</p>
  <h1>End of the message</h1>
  `

sgMail.setApiKey(process.env.key)

const msg = {
  to: 'minyanashdod@gmail.com',
  from: 'newbennytal@gmail.com',
  subject: 'Minyan-Project',
  html: theMsg
}

sgMail.send(msg)
.then(res.status(204).send())
.catch(err => console.log(err))
})



app.listen(port, () => console.log('express - ON'))

// All about Express