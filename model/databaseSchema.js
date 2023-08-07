const  mongoose  = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:"string",
        required:[true,"Name field can't be empty"],
        minlength:3,
        maxlength:20,
    },
    price: Number,
    description: String,
    rating: Number,
    category: String,     
})

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:[ true,"email required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: String,
    username: {
        type: String,
        unique: true,
        minlength: 3,
        maxlength: 30
    },
})

module.exports.user = mongoose.model("User", userSchema)
module.exports.product = mongoose.model("Product", productSchema);

