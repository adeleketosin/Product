const  { Router } = require("express")
const signUp = require("../controller/signup")
const login = require("../controller/login")
const deleteProduct = require("../controller/deleteProduct")
const updateProduct = require("../controller/updateProduct")
const singleProduct = require("../controller/getSingleProduct")
const allProduct = require("../controller/allProduct")
const create = require("../controller/createProduct")   
const updatePassword = require("../controller/updatePassword")
const allUsers = require("../controller/allUsers")
const verifyToken = require('../model/verifyToken')


const router = Router()

router.post("/signup", signUp)

router.post("/login", login)

router.delete("/delete/:id", verifyToken, deleteProduct)
  
router.put("/updateProduct", verifyToken, updateProduct)

router.put("/updatePassword/:id", verifyToken, updatePassword)

router.get("/single/:id", verifyToken, singleProduct)

router.get("/allProduct", verifyToken, allProduct)

router.get("/allUsers",  verifyToken, allUsers)

router.post("/createProduct",verifyToken, create)

module.exports = router;