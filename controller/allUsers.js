const  { user } = require("../model/databaseSchema");

const allUsers = async (req, res)=>{
    console.log(req.body);
    try {
        const allUser= await user.find({}, 'username email password')
    res.json({message: allUser})        
    } catch (error) {
        res.status(400).send(error)
        console.error(error);
    }
}
module.exports = allUsers


