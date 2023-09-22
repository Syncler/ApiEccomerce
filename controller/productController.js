// const bcrypt = require('bcrypt');
const router = require("express").Router();
const Product = require('../models/Product');

router.post('/create/new', async function (req, res){
    const newProduct = new Product(req.body);

    try{ 
        const savedProduct = await newProduct.save()
        res.status(200).json({ message: 'New Product created successfully', savedProduct})

    }catch (error) {
        res.status(500).json(error)
    }
});

//Get All products API with Search
router.get("/", async (req, res) =>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;
        if(qNew){
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        }else if(qCategory){
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            })
        }else{
            products =  Product.find();
        }
        res.status(200).json(products)
        
    }catch(error){
        res.status(500).json({
            message: "Do not possible find Category or New product",
            error
        })
    }
})

module.exports = router;