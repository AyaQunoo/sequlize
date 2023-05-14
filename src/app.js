const express = require('express');
const path = require('path');
const db=require('../src/Database/connection')
const router=require('./routes/gigs')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
db.authenticate().then(() => {
    console.log('connected');
}).catch((err) => console.log(err))

module.exports = app;