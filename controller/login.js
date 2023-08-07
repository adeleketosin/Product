const  { user } = require("../model/databaseSchema")
const  { userSchema } = require("../model/joiValidator")
const bcrypt = require('bcrypt');
require('dotenv').config()
const jwt = require('jsonwebtoken')

const login = async (req, res)=>{
const {error, value} = userSchema.validate(req.body)
   if(error) res.status(400).json({message:error})
    const oneUsername = await user.findOne({
        username: value.username
     })
     console.log(oneUsername)
     if (oneUsername) {
      const passwordExist= await bcrypt.compare(value.password, oneUsername.password);
      if(passwordExist){
         try{
            const token= jwt.sign({_id:oneUsername._id}, process.env.SECRET_KEY,{expiresIn:"1h"});
            res.cookie("jwToken", token, {maxAge: 1000 *60*60})
            res.status(200).json({message:"Welcome on board"})
         } catch (error) {
            console.error(error);
        }
      }
      else{
         res.status(400).json({message:"Invalid Password"})
      }
    }
     else{
        return res.status(400).json({message:"Username does not Exist"})
     }
}
module.exports = login
