const express = require( "express")
const mongoose = require( "mongoose")
const router = require( "./pathRouter/route")
const cookieParser= require('cookie-parser')

const app = express();
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/Product",{useNewUrlParser:true})
app.use(cookieParser())
app.use(router)

app.listen(3000, console.log("server is running"))