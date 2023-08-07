const  { product } = require("../model/databaseSchema")

const updateProduct = async (req, res)=>{
    const myProduct = req.body;
    try {
        const id = req.body._id
        const updatedGoods = await product.findByIdAndUpdate(id, myProduct);
        console.log(updatedGoods);
        res.status(201).json({message:"updated Goods"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to update" })
    }
} 

module.exports = updateProduct