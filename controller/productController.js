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

module.exports = router;