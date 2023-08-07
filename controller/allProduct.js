const  { product } = require("../model/databaseSchema");

const allProduct = async (req, res)=>{
    console.log(req.body);
    try {
        const allProducts= await product.find({})
    res.json({message: allProducts})        
    } catch (error) {
        res.status(400).send(error)
        console.error(error);
    }
}
module.exports = allProduct
