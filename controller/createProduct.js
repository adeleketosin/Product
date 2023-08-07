const  { product } = require("../model/databaseSchema")
const  { Productschema } = require("../model/joiValidator")

const create = async (req, res) => {
    const {error, value} = Productschema.validate(req.body)
    console.log(req.body);
    if(error){
        console.error(error);
    }
    console.log(value)
    try {
        const pru = product ({
            name: value.name,
            price: value.price,
            description: value.description,
            rating: value.rating,
            category: value.category,  
        })
        console.log(pru)
        const prod = await pru.save();
        res.status(200).json({message:"Product created", prod})
         console.log(prod)
    } catch (error) {
        console.error(error);
    }
}

module.exports = create