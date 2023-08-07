const  Joi = require("joi")

const Productschema=Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    category:Joi.string().required(),
})

const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email:Joi.string().email().required(),
})

module.exports.Productschema = Productschema
module.exports.userSchema = userSchema