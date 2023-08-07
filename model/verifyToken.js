const jwt =require('jsonwebtoken');
require('dotenv').config();
const  { user } = require("../model/databaseSchema")

const verifyToken= async (req, res, next)=>{
    const token = req.cookies.jwToken;

    if(token){
        jwt.verify(token, process.env.SECRET_KEY, async (error, decodedToken)=>{
            console.log(decodedToken);
            if(error || !decodedToken) {
            req.user=null;
            res.status(400).send("Access denied...You must login first");
            
            }
            else{
               let userId= await user.findById(decodedToken._id);
               req.user=userId._id;
                next();
            }
        })
    }
    else{
        req.user=null;
        res.status(400).send("Access denied...You must login first");
    }
}

module.exports=verifyToken;