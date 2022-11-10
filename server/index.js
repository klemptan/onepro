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

app.use(cors())
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