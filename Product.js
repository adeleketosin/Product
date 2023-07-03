import exp from "express";
import mongoose from "mongoose";
import Joi from "joi";

const app = exp();
app.use(exp.json())
mongoose.connect("mongodb://127.0.0.1:27017/Product",{useNewUrlParser:true})

// const Joi = require('joi');

const schema=Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    category:Joi.string().required(),
})

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    rating: Number,
    category: String,     
})

const Goods = mongoose.model("CreateProduct", productSchema);

app.post('/product', async (req, res)=>{
    const {error, value}=schema.validate(req.body)
    console.log(req.body);
    if(error){
        console.error(error);
    }
    console.log(value)
    try {
        const pru = Goods({
            name: value.name,
            price: value.price,
            description: value.description,
            rating: value.rating,
            category: value.category,  
        })
        const prod= await pru.save();
        res.status(200).send("product created")
         console.log(prod)
    } catch (error) {
        console.error(error);
    }
})

app.post('/single', async (req, res)=>{
    try{
        const getProduct = await Goods.findOne({category: req.body.category},'name -_id');
        res.send(getProduct);
    }catch(error){
        console.log()
    }
})

app.post('/update', async (req, res)=>{
    const myProduct = req.body;
    try {
        const updatedGoods = await Goods.findByIdAndUpdate
        ({ _id:  myProduct._id}, {price: 12000,});
        console.log(updatedGoods);
        res.status(201).send(updatedGoods)
    } catch (error) {
        console.log(error);
    }
}
)

app.post('/delete', async (req, res)=>{
    const deleteId = req.body;
     try {
        const deleteProduct = await Goods.deleteOne({ _id:  deleteId._id});
        console.log(deleteProduct);
        res.status(201).send(deleteProduct)
    }  catch (error) {
        console.log(error);
    }
}
)

app.post('/all', async (req, res)=>{
    console.log(req.body);
    try {
        const allProduct= await Goods.find({})
    res.send(allProduct)        
    } catch (error) {
        console.error(error);
    }
})

app.listen(5700, console.log("server is running"))