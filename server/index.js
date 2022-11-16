const express = require('express');
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require("cors");
const router = require('./routers/index')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.SERVER_PORT || 5000

const app = express()

var allowlist = ['http://onepro.tk', 'https://onepro.tk']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname,'static')))

app.use('/api',router)



const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync({alter:true})
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()