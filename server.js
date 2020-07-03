const express = require ('express'); //import express
const app = express(); //initialise express

//initialise middleware
const authUrls = require('./api/auth'); 

const mongoose = require('mongoose'); //import mongoose
const dotenv = require('dotenv');  //import dotenv

//activate dotenv
dotenv.config()

//connect to database with mongoose
mongoose.connect(process.env.DB_CONNECTION,
    {useUnifiedTopology: true}, () =>  console.log("DB has been connected"))

app.use(express.json())
app.use('/api/auth', authUrls);


app.listen(3100, () => {
   console.log("server is running.....")
})
