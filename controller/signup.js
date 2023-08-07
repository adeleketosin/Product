const  { user } = require("../model/databaseSchema")
const  { userSchema } = require("../model/joiValidator")
const bcrypt = require('bcrypt')

const signUp = (async (req, res)=>{
    const { error, value } = userSchema.validate(req.body);
    console.log(req.body);  
    if(error){
     res.status(400).send(`Validation Error : ${error}`)
    }
    else{
        try {
            const hashPassword = await bcrypt.hash(value.password, 10) 
            const sign = user({
            email: value.email,
            password: hashPassword,
            username: value.username,  
        })
        if (!sign.email) {res.status(404).json({message:"Email already exit"})}
        const sucess = await sign.save();
        console.log(sucess)
        res.status(201).json({message:"Sign Up Successfully"})
         console.log(sucess)
    } catch (error) {
        console.error(error);
        const key=Object.keys(error.keyPattern)

        if(key[0]==="email"){

            res.status(400).json({message:"Email already exist"})

        }
        else if(key[0]=="username"){
            res.status(400).json({message: "Username already exist"})
            
        }
    }
    }
    
}) 
module.exports = signUp   