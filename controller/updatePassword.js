const  { user } = require("../model/databaseSchema")

const updatePassword = async (req, res)=>{
    try{
        const {password, confirmPassword} = req.body
        const id = req.params.id
        const existingUser = await user.findById(id);
        if (!existingUser){
            res.status(400).json({Message: "User not found"})
        }
        if (password !== confirmPassword){
            res.status(500).json({Message: "Password does not Match"})
        }
        if (password === existingUser.password){
            res.status(500).json({Message: "Password already Exist"})
        }
        existingUser.password = password;
        await existingUser.save();
        res.status(201).json({Message:"Password updated Succesfully"})
    } catch (error){
        res.status(404).json({Message:"Failed to update"})
    }
} 

module.exports = updatePassword;

