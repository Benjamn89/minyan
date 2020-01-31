const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
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


app.post('/send-email', async (req, res) => {

  const theMsg = `<h1>Bellow will be the message</h1>
  <p>${req.body.contact}</p>
  <p>${req.body.street}</p>
  <p>${req.body.preytimes}</p>
  <p>${req.body.shabat}</p>
  <p>${req.body.information}</p>
  <h1>End of the message</h1>
  `
 
  const nodemailer = require("nodemailer");
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD // generated ethereal password
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Benny Tal 👻" <newbennytal@gmail.com>', // sender address
      to: "newbennytal@gmail.com", // list of receivers
      subject: "Testing nodemailer ✔", // Subject line
      text: "Test - plain text", // plain text body
      html: theMsg // html body
    });
  
    console.log('Message sent');
    res.status(204).send()
  }
  
  main().catch(console.error);

})



app.listen(port, () => console.log('express - ON'))

// All about Express