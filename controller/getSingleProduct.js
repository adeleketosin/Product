const  { product } = require("../model/databaseSchema")

const singleProduct = async (req, res)=>{
        console.log(req.params);
        const {error, value} = (req.body)
        try{
            const id = req.params.id
            const getProduct = await product.findById(id)
            if (!getProduct){
                res.json({ message: "product not found" })
            }
            res.json({getProduct}); 
        }catch(error){
            console.log(error);
        }
    }

module.exports = singleProduct