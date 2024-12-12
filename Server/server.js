require('dotenv').config();
const express =require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const Port = process.env.PORT || 567
const MONGO_URI = process.env.MONGO_URL

cors({
    origin: process.env.CLIENT_URL,
    method: ["GET","POST", "DELETE","PUT"],
allowedHeaders: ['Content-Type', "Authorization"]
})
const corsOption ={
    origin: process.env.CLIENT_URL,
    method,
}

app.use(express.json())

// data base connection

mongoose.connect(MONGO_URL).then(()=>console.log("database connected")).catch((e)=>console.log(e))
app.listion(PORT,()=>{
    console.log("server is running ")
})

app.use((err,req,res,next) =>{
    console.log(err.stack)
    res.status(500).json({
        success:false,
        message:'Something Went Wrong'
    })
})