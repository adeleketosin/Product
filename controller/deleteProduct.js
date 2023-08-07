const  { product } = require("../model/databaseSchema")

const deleteProduct = async (req, res)=>{
    try {
        const id = req.params.id
        const deletedProduct = await product.findByIdAndDelete(id)
        if (!deletedProduct) {
            return res.status(404).json({message:"Product not Found"})
        };
        console.log(req.params)
        res.status(201).json({product})
    } catch (error) {
        console.log(error);
    }
} 

module.exports = deleteProduct